const testSheet = css('sheet', null, [css('rule', {
  selector: '.test-node'
}, [css('decl', {
  prop: 'display',
  value: 'flex'
}), css('decl', {
  prop: 'rect',
  value: '10px'
}), css('decl', {
  prop: 'content',
  value: data => data ? data.foo : 'default'
}), css('decl', {
  prop: 'color',
  value: props.active ? 'blue' : 'red'
}), css('decl', {
  prop: 'backgroundPosition',
  value: pos
}), css('decl', {
  prop: 'activeColor',
  value: 'red'
}), css('rule', {
  selector: '&:hover'
}, [css('decl', {
  prop: 'textDecoration',
  value: 'underline'
}), css('decl', {
  prop: 'activeColor',
  value: 'black'
})])])]);
