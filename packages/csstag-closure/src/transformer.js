import {Transformer} from 'csstag-base'

class TransformerClosure extends Transformer {

  render(ctx, nodes) {
    return Object.assign(...nodes.map(node => {
      if (typeof node === 'function') {
        return node(ctx);
      }
      return node;
    }))
  }

  sheet(props, children) {
    return ctx => this.render(ctx, children);
  }

  rule(props, children) {
    return ctx => props && props.selector
     ? {[this.selector(props.selector)]: this.render(ctx, children)}
     : this.render(ctx, children);
  }

  value(ctx, value) {
    if (typeof value === 'function') {
      return value(ctx || {});
    }
    return value;
  }

  declaration({prop, value}) {
    return ctx => ({[this.prop(prop)]: this.value(ctx, value)});
  }

}

export default TransformerClosure;
