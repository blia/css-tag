"use strict";

const postcss = require('postcss');
const uuid = require('uuid');

const _ = {
  prop: require('./prop'),
  decl: require('./decl'),
  tagName: require('./tag-name'),
  className: require('./class-name'),
  statusName: require('./status-name'),
  rule: require('./rule')
};

exports.__esModule = true;

const placeholder = uuid.v4();

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
          decls = _.decl(t, rootDecls, expressions, placeholder);
        }
        if(rootRules.length) {
          rules = _.rule(t, rootRules, expressions, placeholder);
        }

        if (decls.length) {
          func = t.expressionStatement(t.callExpression(
            t.memberExpression(t.identifier('css'), t.identifier('rule')), [
              t.nullLiteral(),
              t.arrayExpression([].concat(decls, rules))]
            ));
        } else {
          func = t.expressionStatement(t.callExpression(
            t.memberExpression(t.identifier('css'), t.identifier('sheet')), [
              t.nullLiteral(),
              t.arrayExpression([].concat(decls, rules))]
            ));
        }

        path.replaceWith(func);
      }
    }
  };
};
