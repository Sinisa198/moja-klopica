export const getDayOfTheWeek = (dateString) => {
  let date;
  if (dateString) {
    date = new Date(dateString);

    return date.getDay();
  }

  date = new Date();
  return date.getDay();
};

export const isTheSameDay = (activeMenuDay, menuDate) => {
  const comparingDate = new Date(menuDate);

  return activeMenuDay === comparingDate.getDay();
};
