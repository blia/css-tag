"use strict";

exports.getFuncName = row =>
  row.match(/[a-z-]+/)[0];

exports.getFuncArgs = row => {
  const [, right] = row.split(':');
  return right.trim().split(' ');
}
