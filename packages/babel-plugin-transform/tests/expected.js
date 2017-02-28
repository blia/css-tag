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
  prop: 'background-position',
  value: pos
}), css('decl', {
  prop: 'active-color',
  value: 'red'
}), css('rule', {
  selector: '&:hover'
}, [css('decl', {
  prop: 'text-decoration',
  value: 'underline'
}), css('decl', {
  prop: 'active-color',
  value: 'black'
})])])]);
