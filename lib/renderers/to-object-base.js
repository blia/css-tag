const toCamel = require('camel-case');
const toParam = require('param-case');
const Dict = require('../dicts/default').default;

class Renderer {
  constructor(dict) {
    this.dict = dict
  }

  render (data, nodes) {
    // nodes.map(n => console.log(n(data)))
    return Object.assign.apply(null,
      nodes.map(node => {
        if (typeof node === 'function') {
          return node(data)
        } else {
          return Object.keys(node).reduce((obj, key) => {
            obj[key] = (typeof node[key] === 'function')
              ? node[key](data)
              : node[key];
            return obj;
          }, {});
        }
      })
    );
  }

  toKey (name) {
    return toCamel(name);
  }

  toParam (name) {
    return toParams(name);
  }

  toClassName(name) {
    return this.toKey(name);
  }

  onSheet (props, children) {
    return data => this.render(data, children)
  }

  onRule (props, children) {
    const selector = props && props.selector
    return data => {
      return selector
        ? {[this.toKey(selector)]: this.render(data, children)}
        : this.render(data, children);
    }
  }

  transform (prop, value) {
    return this.dict.transform(prop, value)
  }

  onDeclaration (props) {
    const {prop, value} = props
    return this.transform(prop, value)
  }

}

exports.default = Renderer;
