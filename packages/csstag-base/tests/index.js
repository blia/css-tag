import css from '../src';

const pos = 'absolute';

const testSheet = css`
  div.test-node {
    display: flex;
    color: ${props => props.color};
    background-position: ${pos};
    :hover {
      text-decoration: underline;
    }
  }
`;

const testSheet2 = {
  testNode: css`
    display: flex;
    color: ${props => props.color};
    background-position: ${pos};
    :hover {
      text-decoration: underline;
    }`
}

console.log(testSheet);
console.log(testSheet2);
