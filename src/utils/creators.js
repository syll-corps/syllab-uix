const createPageText = (formTitle, label, placeholder, favItemsTitle, scheduleTitle) => {
  return ({
    scheduleForm: { formTitle, label, placeholder, favItemsTitle },
    schedule: { scheduleTitle }
  });
};

const createColorObj = (color, backgroundColor) => {
  return ({ color, backgroundColor });
};

const createTeacherObj = (fullName, isLeader, likesCount, comment) => {
  return ({ fullName, isLeader, likesCount, comment })
}

export {
  createPageText,
  createColorObj,
  createTeacherObj
};