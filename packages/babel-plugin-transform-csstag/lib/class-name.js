"use strict";

module.exports = (t, name) =>
  t.objectProperty(
    t.identifier('className'),
    t.stringLiteral(name));
