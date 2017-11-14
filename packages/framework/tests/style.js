import css from '../src';

const testSheet = css`
  .test-node {
    display: flex;
    -bs-button: normal;
    foo: bar;
    background-color: ${props => props.color || 'red'};
    color: red;
    :hover {
      text-decoration: underline;
    }
  }
`;

export default testSheet;
