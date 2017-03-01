'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transformer = undefined;

var _transformer = require('./transformer');

var _transformer2 = _interopRequireDefault(_transformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transformer = new _transformer2.default();

function css() {
  return transformer.transform.apply(transformer, arguments);
}

exports.Transformer = _transformer2.default;
exports.default = css;