
const dict = new Map();

// set('name', func)
// set('ns', obj)
// set(obj)

const isObject = test => typeof test === "object" && test.constructor.name === "Object";
const isFunction = f => typeof f === 'function';

export function has(ns, prop) {
  if (!ns) {
    return dict.has(prop);
  }
  if (!dict.has(ns)) {
    return false;
  }
  const lib = dict.get(ns);
  return lib.has(prop);
}

export function get(ns, prop) {
  if (!ns) {
    return dict.get(prop);
  }
  if (!dict.has(ns)) {
    console.error(`NamesSpace ${ns} not exist`);
  }
  const lib = dict.get(ns);
  return lib.get(prop);
}

function use(...args) {
  if (args.length === 0) {
    // throw error
  }
  if (args.length === 1) {
    const [obj] = args;
    Object.keys(obj).map(prop => {
      if (dict.has(prop)) {
        console.warn(`Proerty ${prop} already exist`);
      }
      dict.set(prop, obj[prop]);
    });
  }
  if (args.length === 2 && isObject(args[1])) {
    const [ns, obj] = args;
    const lib = new Map();
    dict.set(ns, lib);
    Object.keys(obj).map(prop => {
      if (lib.has(prop)) {
        console.warn(`Proerty ${prop} in ${ns} already exist`);
      }
      lib.set(prop, obj[prop]);
    });
  }
  if (args.length === 2 && isFunction(args[1])) {
    const [prop, f] = args;
    if (dict.has(prop)) {
      console.warn(`Proerty ${prop} already exist`);
    }
    dict.set(prop, f);
  }
}

export default use;
