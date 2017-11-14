
const isFunction = f => typeof f === 'function';

const render = (ctx, nodes) =>
  Object.assign(...nodes.map(node => isFunction(node) ? node(ctx) : node));

export default render;
