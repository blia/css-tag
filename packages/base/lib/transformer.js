'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transformer = function () {
  function Transformer() {
    _classCallCheck(this, Transformer);
  }

  _createClass(Transformer, [{
    key: 'prop',
    value: function prop(_prop) {
      return _prop;
    }
  }, {
    key: 'value',
    value: function value(_value) {
      return _value;
    }
  }, {
    key: 'declaration',
    value: function declaration(_ref, children) {
      var prop = _ref.prop,
          value = _ref.value;

      return _defineProperty({}, this.prop(prop), this.value(value));
    }
  }, {
    key: 'selector',
    value: function selector(_selector) {
      return _selector;
    }
  }, {
    key: 'rule',
    value: function rule(props, children) {
      return props && props.selector ? _defineProperty({}, this.selector(props.selector), Object.assign.apply(null, children)) : Object.assign.apply(null, children);
    }
  }, {
    key: 'sheet',
    value: function sheet(props, children) {
      return Object.assign.apply(null, children);
    }
  }, {
    key: 'transform',
    value: function transform(type, props, children) {
      switch (type) {
        case 'sheet':
          return this.sheet(props, children);
        case 'rule':
          return this.rule(props, children);
        case 'decl':
          return this.declaration(props, children);
      }
    }
  }]);

  return Transformer;
}();

exports.Transformer = Transformer;
exports.default = Transformer;