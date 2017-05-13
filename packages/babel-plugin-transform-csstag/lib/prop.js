const hasNS = prop => prop[0] === '-';

const getNS = prop => prop.substr(1).split('-')[0];

const getName = prop => prop.substr(1).split('-')[1];

const propWithNS = ({prop, value}) =>
  ({prop: getName(prop), value, ns: getNS(prop)});

const propWithoutNS = ({prop, value}) =>
  ({prop, value, ns: null});

const prop = (decl) =>
  hasNS(decl.prop) ? propWithNS(decl) : propWithoutNS(decl);

module.exports = prop;
