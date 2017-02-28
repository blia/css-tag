const toParam = require('param-case');


function defultDeclarationHandler(prop, value) {
  return {[prop]: value};
}


class Dictionary {
  constructor(f = defultDeclarationHandler, rules) {
    this.declarationHandler = f;
    this.dict = new Map();
    if (rules) {
      this.addRules(rules);
    }
  }

  toParam(name) {
    return toParam(name)
  }

  setDeclarationHandler (f) {
    this.declarationHandler = f
  }

  set(name, f) {
    this.dict.set(this.toParam(name), f)
  }

  addDeclaration (name, f) {
    this.set(name, f);
  }

  _addDeclarationsFromObject(rules) {
    Object.keys(rules).forEach(name => {
      this.addDeclaration(name, rules[name]);
    })
  }

  _addDeclarationsFromArray(rules) {
    rules.forEach(rule => {
      if (Array.isArray(rule) && rule.length === 2) {
        const [name, f] = rule;
        this.addDeclaration(name, f)
      // array of named functions [color, backgroundColor]
      } else if (typeof rule === 'function') {
        // console.log(function.name);
      // array of objects
      } else if (typeof rule === 'object') {
        this._addDeclarationsFromObject(rule);
      }
    })
  }

  addDeclarations (rules) {
    if (Array.isArray(rules)) {
      this._addDeclarationsFromArray(rules);
    } else if (typeof rules === 'object') {
      this._addDeclarationsFromObject(rules);
    }
  }

  transform(key, value) {
    const param = this.toParam(key)
    return this.dict.has(param)
      ? this.dict.get(param)(value)
      : this.declarationHandler(param, value);
  }
}

exports.default = Dictionary;
