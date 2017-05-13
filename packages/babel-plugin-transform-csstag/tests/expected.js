const testSheet = css.sheet(null, [css.rule({
  className: 'test-node'
}, [css.decl({
  prop: 'display',
  value: 'flex'
}), css.decl({
  prop: 'rect',
  value: '10px'
}), css.decl({
  prop: 'content',
  value: data => data ? data.foo : 'default'
}), css.decl({
  prop: 'color',
  value: props.active ? 'blue' : 'red'
}), css.decl({
  prop: 'background-position',
  value: pos
}), css.decl({
  prop: 'active-color',
  value: 'red'
}), css.rule({
  statusName: 'hover'
}, [css.decl({
  prop: 'text-decoration',
  value: 'underline'
}), css.decl({
  prop: 'active-color',
  value: 'black'
})])]), css.rule({
  tagName: 'div',
  className: 'button'
}, [css.decl({
  ns: 'bs',
  prop: 'button',
  value: 'normal'
})]), css.rule({
  tagName: MyButton,
  className: 'red'
}, [css.decl({
  prop: foo,
  value: 'red'
})])]);
const testBlock = {
  testNode: css.rule(null, [css.decl({
    prop: 'display',
    value: 'flex'
  }), css.decl({
    prop: 'rect',
    value: '10px'
  }), css.decl({
    prop: 'content',
    value: data => data ? data.foo : 'default'
  }), css.decl({
    prop: 'color',
    value: props.active ? 'blue' : 'red'
  }), css.decl({
    prop: 'background-position',
    value: pos
  }), css.decl({
    prop: 'active-color',
    value: 'red'
  }), css.decl({
    ns: 'bs',
    prop: 'button',
    value: 'normal'
  }), css.decl({
    prop: foo,
    value: 'red'
  }), css.rule({
    statusName: 'hover'
  }, [css.decl({
    prop: 'text-decoration',
    value: 'underline'
  }), css.decl({
    prop: 'active-color',
    value: 'black'
  })])])
};
