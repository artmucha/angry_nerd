export const getImageUrl = (url) => {

  if(!url) url = '/upload/placeholder.jpg';

  if (process.env.NEXT_PUBLIC_IMAGE_HOST) {
    return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
  }

  return null
}