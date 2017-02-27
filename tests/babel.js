const css = require('../lib').default;

css.addDeclarations({
  rect(val) {
    return {
      width: val,
      height: val
    }
  },
  activeColor (color) {
    return (data = { active: false }) => data.active && {color, backgroundColor: color}
  }
})

const props = {
  active: true
}
const pos = 'absolute';

const testSheet = css`
  .test-node {
    display: flex;
    rect: 10px;
    content: ${data => data ? data.foo: 'default'};
    color: ${props.active ? 'blue': 'red'};
    background-position: ${pos};
    active-color: red;
    &:hover {
      text-decoration: underline;
      active-color: black;
    }
  }
`;

const ctx = {
  active: true,
  foo: 'bar'
}

console.log(testSheet(ctx));
console.log(testSheet());
