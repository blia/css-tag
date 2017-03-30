'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _csstagBase = require('csstag-base');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TransformerClosure = function (_Transformer) {
  _inherits(TransformerClosure, _Transformer);

  function TransformerClosure() {
    _classCallCheck(this, TransformerClosure);

    return _possibleConstructorReturn(this, (TransformerClosure.__proto__ || Object.getPrototypeOf(TransformerClosure)).apply(this, arguments));
  }

  _createClass(TransformerClosure, [{
    key: 'render',
    value: function render(ctx, nodes) {
      return Object.assign.apply(Object, _toConsumableArray(nodes.map(function (node) {
        if (typeof node === 'function') {
          return node(ctx);
        }
        return node;
      })));
    }
  }, {
    key: 'sheet',
    value: function sheet(props, children) {
      var _this2 = this;

      return function (ctx) {
        return _this2.render(ctx, children);
      };
    }
  }, {
    key: 'rule',
    value: function rule(props, children) {
      var _this3 = this;

      return function (ctx) {
        return props && (props.tagName || props.className || props.statusName) ? _defineProperty({}, _this3.selector(props), _this3.render(ctx, children)) : _this3.render(ctx, children);
      };
    }
  }, {
    key: 'value',
    value: function value(ctx, _value) {
      if (typeof _value === 'function') {
        return _value(ctx || {});
      }
      return _value;
    }
  }, {
    key: 'declaration',
    value: function declaration(_ref2) {
      var _this4 = this;

      var prop = _ref2.prop,
          value = _ref2.value;

      return function (ctx) {
        return _defineProperty({}, _this4.prop(prop), _this4.value(ctx, value));
      };
    }
  }]);

  return TransformerClosure;
}(_csstagBase.Transformer);

exports.default = TransformerClosure;