"use strict";

const _ = {
  decl: require('./decl'),
  tagName: require('./tag-name'),
  className: require('./class-name'),
  statusName: require('./status-name'),
}

const _rule = (t, rules, expressions, placeholder) =>
  rules.map(rule => {
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
    return t.callExpression(
      t.memberExpression(t.identifier('css'), t.identifier('rule')), [
        t.objectExpression([
          tagName && _.tagName(t, tagName),
          className && _.className(t, className),
          statusName && _.statusName(t, statusName)
        ].filter(i => !!i)),
        t.arrayExpression([].concat(
          decls && _.decl(t, decls, expressions, placeholder),
          rules && _rule(t, rules, expressions, placeholder)
        ))]
      );
  });

module.exports = _rule;
