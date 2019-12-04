import * as courseTypes from './coursesTypes';

export const createCourse = course => {
  return { type: courseTypes.CREATE_COURSE, course };
};
