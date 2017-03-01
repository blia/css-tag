"use strict";

const postcss = require('postcss');
const uuid = require('uuid');

exports.__esModule = true;

const placeholder = uuid.v4();

const _ = {
  decl(t, decls, expressions) {
    return decls.map(decl => {
      const {prop, value} = decl;
      return t.callExpression(t.identifier('css'), [
        t.stringLiteral('decl'),
        t.objectExpression([
          t.objectProperty(t.identifier('prop'), t.stringLiteral(prop)),
          t.objectProperty(t.identifier('value'), value === placeholder ? expressions.shift() : t.stringLiteral(value))
        ])
      ]);
    })
  },
  rule(t, rules, expressions) {
    return rules.map(rule => {
      const rules = rule.nodes.filter(r => r.type === 'rule');
      const decls = rule.nodes.filter(r => r.type === 'decl');
      return t.callExpression(t.identifier('css'), [
        t.stringLiteral('rule'),
        t.objectExpression([t.objectProperty(t.identifier('selector'), t.stringLiteral(rule.selector))]),
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
