const postcss = require('postcss');
const babylon = require('babylon');
const fs = require('fs');

const js = fs.readFileSync('./tests/flat-object.js', 'utf8');

const ast = babylon.parse(js);

const cssTags = ast.tokens.filter(token => {
  const {type, value} = token;
  const tag = type.label === 'name' && value === 'css';
  const backtick = type.label === '`';
  const template = type.label === 'template';
  // return tag || template || backtick;
  return true
})

console.log(global);

// root.walkDecls(decl => {
//   const {prop, value} = decl;
//   // > css('decl', {prop: value})
// })
