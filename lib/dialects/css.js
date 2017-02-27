"use strict";

exports.getFuncName = row =>
  row.match(/[a-z-]+/)[0];

exports.getFuncArgs = row => {
  const [_, right] = row.split(':');
  return right.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0;]+$/g, '').split(' ');
}
