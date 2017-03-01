import css from '../src';

const pos = 'absolute';

const testSheet = css`
  .test-node {
    display: flex;
    background-position: ${pos};
    color: ${props => props.color || 'red'};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const testSheet2 = {
  testNode: css`
  display: flex;
  background-position: ${pos};
  color: ${props => props.color || 'red'};
  &:hover {
    text-decoration: underline;
  }`
}

const ctx = {
  color: 'blue'
}

console.log(testSheet());
console.log(testSheet2.testNode());
console.log(testSheet(ctx));
console.log(testSheet2.testNode(ctx));
