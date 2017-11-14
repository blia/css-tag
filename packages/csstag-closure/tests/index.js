import css from '../src';

const pos = 'absolute';

const testSheet = css`
  div.test-node {
    display: flex;
    background-position: ${pos};
    color: ${props => props.color || 'red'};
    :hover {
      text-decoration: underline;
    }
  }
`;

const testNode = css`
  display: flex;
  background-position: ${pos};
  color: rgba(${props => props.color || 'red'}, 0.5);
  :hover {
    text-decoration: underline;
  }`;

const ctx = {
  color: 'blue'
}

console.log(testSheet());
console.log(testNode());
console.log(testSheet(ctx));
console.log(testNode(ctx));
