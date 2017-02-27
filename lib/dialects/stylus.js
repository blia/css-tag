"use strict";

exports.getFuncName = row =>
  row.match(/[a-z-]+/)[0];

exports.getFuncArgs = row =>
  row.match(/[a-z-]\s(.+)/)[1];
