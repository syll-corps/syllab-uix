import $ from 'jquery';

const toggleClass = (className, toggledClass) => {
  const element = $(`.${className}`);
  element.toggleClass(`${className}_${toggledClass}`);
};

const blockClick = (className, timeout) => {
  const element = $(`.${className}`);
  element.bind('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
  });
  setTimeout(() => element.unbind('click'), timeout);
};

const getCssPropValue = (className, prop) => {
  const element = $(`.${className}`);
  return element.css(prop);
};

export {
  toggleClass,
  blockClick,
  getCssPropValue
};