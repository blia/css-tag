
class Transformer {

  prop(prop) {
    return prop;
  }

  value(value) {
    return value;
  }

  declaration({prop, value}) {
    return {[this.prop(prop)]: this.value(value)};
  }

  // className(name) {
  //   return name;
  // }
  //
  // tagName(name) {
  //   return name;
  // }
  //
  // statusName(name) {
  //   return name;
  // }

  selector(props) {
    const {tagName, className, statusName} = props;

    if (statusName) {
      return `:${statusName}`;
    }
    return tagName ? `${tagName}.${className}`: className;
  }

  rule(props, children) {
    return props && (props.tagName || props.className || props.statusName)
     ? {[this.selector(props)]: Object.assign(...children)}
     : Object.assign(...children);
  }

  sheet(props, children) {
    return Object.assign(...children);
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
