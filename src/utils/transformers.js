const secToMilliSec = (sec) => {
  return Number(sec.slice(0, sec.length - 1)) * 1000;
};

export {
  secToMilliSec
};