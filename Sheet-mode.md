## Sheet

### Basic

```js
const styles = css`
  .button {
    font-size: 12;
    color: ${color};
    &:hover {
      background: blue;
    }
  }
  .cta-button {
    extend: button,
    &:hover {
      background: black;
    }    
  }
`;
// Babel
const styles = css('sheet', null, [
  css('block', {className: 'button'}, [
    css('prop', {'font-size': 12}),
    css('prop', {color: color}),
    css('block', {mode: 'hover'}, [
      css('prop', {background: 'blue'})
    ])
  ]),
  css('block', {className: 'cta-button'}, [
    css('prop', {'extend': 'button'}),
    css('block', {mode: 'hover'}, [
      css('prop', {background: 'black'})
    ])
  ])
]);
// => console.log(styles);
{
  button: {
    'font-size': 12,
    color: '#FFF',
    '&:hover': {
      background: 'blue'
    }
  },
  ctaButton: {
    extend: 'button',
    '&:hover': {
      background: 'black'
    }
  }
}
```
