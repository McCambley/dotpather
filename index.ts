type ObjectWithPath = {
  [key: string]: any;
};

export default function dotpath(str: string) {
  let parts = str.split(".");
  let len = parts.length;

  return function parse(obj: ObjectWithPath) {
    let testKey;

    for (let i = 0; i < len; ++i) {
      testKey = parts[i];

      if (!obj) return;

      obj = obj[testKey];
    }

    return obj;
  };
}
