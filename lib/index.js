"use strict";
const Dict = require('./dicts/default').default;
const Renderer = require('./renderers/default').default;

const dict = new Dict();
const engine = new Renderer(dict);

function css(type, props, children) {
  switch (type) {
    case 'sheet':
      return engine.onSheet(props, children)
    case 'rule':
      return engine.onRule(props, children)
    case 'decl':
      return engine.onDeclaration(props, children)
  }
}

css.addDeclarations = (...args) => dict.addDeclarations(...args)
css.addDeclaration = (...args) => dict.addDeclaration(...args)

exports.default = css;
