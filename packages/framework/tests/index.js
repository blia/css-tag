import css from '../src';
import testSheet from './style';


const pos = 'absolute';
const foo = val => ctx => ({foo: ctx ? val : 'baz'});
const color = color => ctx => ({color: ctx ? ctx.color : color});
const button = weight => ({'font-weight': weight});

css.use('bs', {button});
css.use({foo});
css.use('color', color);

const testNode = css`
  display: flex;
  background-position: ${pos};
  background-color: ${props => props.color || 'red'};
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
