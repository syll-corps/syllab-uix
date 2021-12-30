import $ from 'jquery';

const toggleActiveClass = (className) => {
  const element = $(`.${className}`);
  element.toggleClass(`${className}_active`);
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
  toggleActiveClass,
  blockClick,
  getCssPropValue
};