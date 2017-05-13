const changeCase = require('change-case');

const isComponent = name => name === changeCase.pascalCase(name);

const componentDefinition = (t, name) => t.objectProperty(
  t.identifier('tagName'),
  t.identifier(name)
);

const tagDefinition = (t, name) => t.objectProperty(
  t.identifier('tagName'),
  t.stringLiteral(name)
);

const tagName = (t, name) =>
  isComponent(name) ? componentDefinition(t, name) : tagDefinition(t, name);

module.exports = tagName;
