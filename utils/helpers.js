export const formatDate = date => {
  const newDate = new Date(date);
  return Intl.DateTimeFormat('pl-PL', {dateStyle: 'long'}).format(new Date(date));
};

export const makeSlug = text => {
  let slug = text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  return slug;
};