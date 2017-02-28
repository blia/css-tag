import Transformer from './transformer';

const transformer = new Transformer();

export function css (...args) {
  return transformer.transform(...args);
}

export default css;
