import qs from "qs";

export const formatDate = date => {
  const newDate = new Date(date);
  return Intl.DateTimeFormat('pl-PL', {dateStyle: 'long'}).format(new Date(date));
};

export const makeSlug = text => {
  let slug = text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  return slug;
};

export const getStrapiURL = (path = "") => {
  return `${
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
  }${path}`
};

export const fetchAPI = async(path, urlParamsObject = {}, options = {}) => {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject);

  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText)
    throw new Error(`An error occured please try again`)
  };

  const data = await response.json();

  return data;
};