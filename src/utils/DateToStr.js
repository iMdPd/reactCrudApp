export const DateToStr = (dateObj) => {
  const date = `${dateObj.getDate()}-0${
    dateObj.getMonth() + 1
  }-${dateObj.getFullYear()}`;

  return date;
};
