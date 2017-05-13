"use strict";

const _ = {
  prop: require('./prop')
};

module.exports = (t, decls, expressions, placeholder) =>
  decls.map(decl => {
    const {prop, value, ns} = _.prop(decl);
    const module = ns && (ns === 'module' || ns === 'local');
    return t.callExpression(
      t.memberExpression(t.identifier('css'), t.identifier('decl')), [
        t.objectExpression([
          ns && !module && t.objectProperty(t.identifier('ns'), t.stringLiteral(ns)),
          t.objectProperty(t.identifier('prop'), module ? t.identifier(prop) : t.stringLiteral(prop)),
          t.objectProperty(t.identifier('value'), value === placeholder ? expressions.shift() : t.stringLiteral(value))
        ].filter(i => !!i))]
      );
  });
