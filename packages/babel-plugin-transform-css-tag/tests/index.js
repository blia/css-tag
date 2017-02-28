const babel = require('babel-core');
const diff = require('diff');
const chalk = require('chalk');
const fs = require('fs');

var pluginPath = require.resolve('../lib');

function normalizeLines(str) {
  return str.trimRight().replace(/\r\n/g, '\n');
}

var output = babel.transformFileSync(__dirname + '/actual.js', {
  plugins: [pluginPath]
});

var expected = fs.readFileSync(__dirname + '/expected.js', 'utf-8');

process.stdout.write('\n\n');

diff.diffLines(normalizeLines(output.code), normalizeLines(expected))
  .forEach(part => {
    let value = part.value;
    if (part.added) {
      value = chalk.green(part.value);
    } else if (part.removed) {
    	value = chalk.red(part.value);
    }
    process.stdout.write(value);
  });

process.stdout.write('\n\n');
