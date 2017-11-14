
const isFunction = f => typeof f === 'function';

const value = (ctx = {}, val) =>
  isFunction(val) ? val(ctx) : val;

export default value;
