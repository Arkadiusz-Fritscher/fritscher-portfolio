const formatDate = function (inputDate) {
  const date = new Date(inputDate);

  const newDate = date.toLocaleDateString('de-DE', {
    month: 'long',
    year: 'numeric',
  });
  return newDate;
};

export default formatDate;
