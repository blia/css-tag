# babel-plugin-transform-csstag

Compile css template strings to function tree

## Installation

```sh
$ npm install babel-plugin-transform-csstag
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["babel-plugin-transform-csstag"]
}
```

### Via CLI

```sh
$ babel --plugins babel-plugin-transform-csstag script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["babel-plugin-transform-csstag"]
});
```
