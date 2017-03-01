import Transformer from './transformer';

const transformer = new Transformer();

function css (...args) {
  return transformer.transform(...args);
}

export {
  Transformer
};

export default css;
