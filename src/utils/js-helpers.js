const delayActionDelegate = (callback, timeout = null) => {
  if (timeout === null) {
    callback();
  } else {
    setTimeout(() => callback(), timeout);
  }
};

const getItemSafely = (array, idx) => {
  const { length } = array;
  return idx > length - 1 ? array[idx % length] : array[idx];
};

const getLastWord = (str, sep) => str.slice(str.lastIndexOf(sep) + 1);

const getValueByPath = (obj, path) => (
  obj[path.slice(path.lastIndexOf('/') + 1)]
);

export {
  delayActionDelegate,
  getItemSafely,
  getLastWord,
  getValueByPath
};