# babel-plugin-transform-css-tag

Compile css template strings to function tree

## Installation

```sh
$ npm install blia/babel-plugin-transform-css-tag
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["babel-plugin-transform-css-tag"]
}
```

### Via CLI

```sh
$ babel --plugins babel-plugin-transform-css-tag script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["babel-plugin-transform-css-tag"]
});
```
