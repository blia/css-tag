# csstag

## Installation

```sh
$ npm install csstag babel-plugin-transform-csstag babel-preset-env
```

## Set up babel

**.babelrc**

```json
{
  "plugins": ["babel-plugin-transform-css-tag"],
  "presets": ["env"]
}
```

## Example

```js
import css from 'css-tag-base';

const pos = 'absolute';

const testSheet = css`
  .test-node {
    display: flex;
    background-position: ${pos};
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
