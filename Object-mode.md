
## Object Mode

This mode is compatible with styled-components

### Basic

```js
const color = '#FFF';

const styles = {
  button: css`
    font-size: 12;
    color: ${color}`
}
// => Babel
const styles = {
  button: css('block', null, [
    css('prop', {'font-size': 12}),
    css('prop', {color: color})
  ]);
}
// console.log(styles);
{
  button: {
    'font-size': 12,
    color: '#FFF'
  }
};
```

### Mode

Mode represents pseudo-classes and may be bound with component's state.

DOM Modes:
- hover
- focus
- active
- ...

Custom modes:
- dirty
- loading
- ...

```js
const color = '#FFF';

const styles = {
  button: css`
    font-size: 12;
    color: ${color};
    &:hover {
      background: blue;
    }`
}
// Babel
const styles = {
  button: css('block', null, [
    css('prop', {'font-size': 12}),
    css('prop', {color, color}),
    css('block', {mode: 'hover'}, [
      css('prop', {background, 'blue'})
    ])
  ])
};
// => console.log(styles);
{
  button: {
    'font-size': 12,
    color: '#FFF',
    '&:hover': {
      background: 'blue'
    }
  }
}
```

### Extending

```js
const color = '#FFF';

const styles = {
  button: css`
    font-size: 12;
    color: ${color};
    &:hover {
      background: blue;
    }`
  ctaButton: css`
    extend: button,
    &:hover {
      background: black;
    }`
}
// Babel
const styles = {
  button: css('block', null, [
    css('prop', {'font-size': 12}),
    css('prop', {'color': color}),
    css('block', {mode: 'hover'}, [
      css('prop', {background, 'blue'})
    ])
  ]),
  ctaButton: css('block', null, [
    css('prop', {extend: 'button'}),
    css('block', {mode: 'hover'}, [
      css('prop', {background, 'blue'})
    ])
  ])
};
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

### TagName*

```js
const Button = css.button`
    font-size: 12;
    color: ${color};`
}
// Babel

const Button = css('block', {tagName: 'button'}, [
    css('prop', {'font-size': 12}),
    css('prop', {'color': color}),
  ])
};
 = css.createComponent(...);
// => console.log(styles);
{
  button: {
    'font-size': 12,
    color: '#FFF',
  },
}
```
