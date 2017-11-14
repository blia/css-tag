import property from './prop';
import value from './value';
import {has, get} from './dict';

const isFunction = f => typeof f === 'function';

const declaration = ({prop, value: val, ns}) => ctx => {
  if (isFunction(prop)) {
    const v = prop(val);
    return isFunction(v) ? v(ctx) : v;
  }
  if (has(ns, prop)) {
    const f = get(ns, prop);
    const v = f(val);
    return isFunction(v) ? v(ctx) : v;
  }

  return ({[property(prop, ns)]: value(ctx, val)});
}

export default declaration;
