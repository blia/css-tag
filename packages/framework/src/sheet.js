import render from './render';

const sheet = (props, children) => ctx => render(ctx, children);

export default sheet;
