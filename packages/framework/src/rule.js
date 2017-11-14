import selector from './selector';
import render from './render';

const withProp = ({tagName, className, statusName}) =>
  !!(tagName || className || statusName);

const rule = (props, children) => ctx =>
  props && withProp(props) ? {[selector(props)]: render(ctx, children)} : render(ctx, children);

export default rule;
