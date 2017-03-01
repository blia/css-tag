# csstag-base

## Installation

```sh
$ npm install csstag-base babel-plugin-transform-csstag
```

## Set up babel

**.babelrc**

```json
{
  "plugins": ["babel-plugin-transform-csstag"]
}
```

## Example

```js
const {css} = require('csstag-base');

const position = 'absolute';

const testSheet = css`
  .test-node {
    display: flex;
    background-position: ${position};
    &:hover {
      text-decoration: underline;
    }
  }
`;
// output
// { '.test-node':
//    { display: 'flex',
//      'background-position': 'absolute',
//      '&:hover': { 'text-decoration': 'underline' } } }
```


## API
