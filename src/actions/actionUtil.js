export const calNumOfPages = (totalItems, itemsPerPage) => {
  // console.log(length);
  // console.log(INIT_STATE);
  return Math.ceil(totalItems / itemsPerPage);
};
