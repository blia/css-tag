import css from '../src';

const props = {
  active: true
}

const pos = 'absolute';

const testSheet = css`
  .test-node {
    display: flex;
    content: ${data => data ? data.foo: 'default'};
    background-position: ${pos};
    &:hover {
      text-decoration: underline;
    }
  }
`;

console.log(testSheet);
