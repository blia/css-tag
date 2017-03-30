"use strict";

const postcss = require('postcss');
const uuid = require('uuid');
const changeCase = require('change-case');

exports.__esModule = true;

const placeholder = uuid.v4();

const _ = {
  prop(decl) {
    if (decl.prop[0] === '-') {
      return {
        prop: decl.prop.substr(1).split('-')[1],
        value: decl.value,
        ns: decl.prop.substr(1).split('-')[0]
      }
    }
    return {
      prop: decl.prop,
      value: decl.value,
      ns: null
    }
  },
  decl(t, decls, expressions) {
    return decls.map(decl => {
      const {prop, value, ns} = _.prop(decl);
      const module = ns && (ns === 'module' || ns === 'local')
      return t.callExpression(t.identifier('css'), [
        t.stringLiteral('decl'),
        t.objectExpression([
          ns && !module && t.objectProperty(t.identifier('ns'), t.stringLiteral(ns)),
          t.objectProperty(t.identifier('prop'), module ? t.identifier(prop) : t.stringLiteral(prop)),
          t.objectProperty(t.identifier('value'), value === placeholder ? expressions.shift() : t.stringLiteral(value))
        ].filter(i => !!i))
      ]);
    })
  },
  tagName(t, name) {
    if (name === changeCase.pascalCase(name)) {
      return t.objectProperty(
        t.identifier('tagName'),
        t.identifier(name)
      )
    }
    return t.objectProperty(
      t.identifier('tagName'),
      t.stringLiteral(name)
    )
  },
  className(t, name) {
    return t.objectProperty(
      t.identifier('className'),
      t.stringLiteral(name)
    )
  },
  statusName(t, name) {
    return t.objectProperty(
      t.identifier('statusName'),
      t.stringLiteral(name)
    )
  },
  rule(t, rules, expressions) {
    return rules.map(rule => {
      const rules = rule.nodes.filter(r => r.type === 'rule');
      const decls = rule.nodes.filter(r => r.type === 'decl');
      const {selector} = rule;
      if (selector.indexOf(' ')) {
        // throw error
      }
      const statusName = selector[0] === ':'
        ? selector.substr(1)
        : null;
      const [tagName, className] = statusName
        ? [null, null]
        : selector.split('.');
      return t.callExpression(t.identifier('css'), [
        t.stringLiteral('rule'),
        t.objectExpression([
          tagName && _.tagName(t, tagName),
          className && _.className(t, className),
          statusName && _.statusName(t, statusName)
        ].filter(i => !!i)),
        t.arrayExpression([].concat(
          decls && _.decl(t, decls, expressions),
          rules && _.rule(t, rules, expressions)
        ))
      ])
    })
  }
}

module.exports = function ({types: t}) {
  return {
    visitor: {
      TaggedTemplateExpression(path) {
        const {node} = path;
        const {quasis, expressions} = node.quasi;
        let css;
        if (quasis.length === 1 && expressions.length === 0) {
          css = quasis[0].value.raw;
        } else {
          css = quasis.map(v => v.value.raw).join(placeholder);
        }
        const root = postcss.parse(css);
        const rootRules = root.nodes.filter(r => r.type === 'rule');
        const rootDecls = root.nodes.filter(r => r.type === 'decl');
        let decls = [];
        let rules = [];
        let func = null;

        if(rootDecls.length) {
          decls = _.decl(t, rootDecls, expressions);
        }
        if(rootRules.length) {
          rules = _.rule(t, rootRules, expressions);
        }

        if (decls.length) {
          func = t.expressionStatement(t.callExpression(t.identifier('css'), [
            t.stringLiteral('rule'),
            t.nullLiteral(),
            t.arrayExpression([].concat(decls, rules))
          ]));
        } else {
          func = t.expressionStatement(t.callExpression(t.identifier('css'), [
            t.stringLiteral('sheet'),
            t.nullLiteral(),
            t.arrayExpression([].concat(decls, rules))
          ]));
        }

        path.replaceWith(func);
      }
    }
  };
};
