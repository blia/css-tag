import css from '../src';

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

console.log(testSheet);
