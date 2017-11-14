
const selector = ({tagName, className, statusName}) =>
  statusName ? `:${statusName}` : tagName ? `${tagName}.${className}`: className;

export default selector;
