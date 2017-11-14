const testSheet = css`
  .test-node {
    display: flex;
    rect: 10px;
    content: ${data => data ? data.foo: 'default'};
    color: ${props.active ? 'blue': 'red'};
    background-position: ${pos};
    active-color: red;
    :hover {
      text-decoration: underline;
      active-color: black;
    }
  }

  div.button {
    -bs-button: normal;
  }

  MyButton.red {
    -foo: red;
  }
`;

const testBlock = {
  testNode: css`
  display: flex;
  rect: 10px;
  content: ${data => data ? data.foo: 'default'};
  color: ${props.active ? 'blue': 'red'};
  background-position: ${pos};
  active-color: red;
  -bs-button: normal;
  -module-foo: red;
  :hover {
    text-decoration: underline;
    active-color: black;
  }`
};
