const hasNS = prop => prop[0] === '-' && prop.substr(1).indexOf('-') !== -1;

const getNS = prop => prop.substr(1).split('-')[0];

const getName = prop => prop.substr(1).split('-')[1];

const getModule = prop => {
  if (prop[0] !== '-') {
    return false;
  }
  const ns = getNS(prop);

  if (ns === 'module' || ns === 'local') {
    return true;
  }
  if (prop.substr(1).indexOf('-') === -1) {
    return true;
  }
}


const propWithNS = ({prop, value}) =>
  ({
    prop: getName(prop),
    value,
    ns: getNS(prop),
    module: getModule(prop)
  });

const propWithoutNS = ({prop, value}) =>
  ({prop, value, ns: null, module: null});



const prop = (decl) =>
  hasNS(decl.prop) ? propWithNS(decl) : propWithoutNS(decl);

module.exports = prop;
