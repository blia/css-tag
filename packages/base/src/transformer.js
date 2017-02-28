
export class Transformer {
  constructor() {

  }

  prop(prop) {
    return prop;
  }

  value(value) {
    return value;
  }

  declaration({prop, value}, children) {
    return {[this.prop(prop)]: this.value(value)};
  }

  selector(selector) {
    return selector;
  }

  rule(props, children) {
    return {
      [this.selector(props.selector)]: Object.assign.apply(null, children)
    };
  }

  sheet(props, children) {
    return Object.assign.apply(null, children);
  }

  transform(type, props, children) {
    switch (type) {
      case 'sheet':
        return this.sheet(props, children);
      case 'rule':
        return this.rule(props, children);
      case 'decl':
        return this.declaration(props, children);
    }
  }
}

export default Transformer;
