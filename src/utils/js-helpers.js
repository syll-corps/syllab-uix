const delayActionDelegate = (callback, timeout = null) => {
  if (timeout === null) {
    callback();
  } else {
    setTimeout(() => callback(), timeout);
  }
};

export {
  delayActionDelegate,
}