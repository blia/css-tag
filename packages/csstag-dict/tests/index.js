import css from '../src';

const pos = 'absolute';

function foo() {

}

const testSheet = css`
  .test-node {
    display: flex;
    -bs-button: normal;
    -module-foo: bar;
    background-position: ${pos};
    color: ${props => props.color || 'red'};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const testNode = css`
  display: flex;
  background-position: ${pos};
  color: ${props => props.color || 'red'};
  &:hover {
    text-decoration: underline;
  }`;

const ctx = {
  color: 'blue'
}

console.log(testSheet());
console.log(testNode());
console.log(testSheet(ctx));
console.log(testNode(ctx));