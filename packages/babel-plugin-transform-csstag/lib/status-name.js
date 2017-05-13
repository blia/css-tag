
const statusName = (t, name) =>
  t.objectProperty(
    t.identifier('statusName'),
    t.stringLiteral(name));

module.exports = statusName;
