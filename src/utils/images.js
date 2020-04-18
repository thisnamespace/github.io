export const getImages = (loc) => {
  // const images = importAll(require.context("./../assets/" + loc, false, /\.(png|jpe?g|svg)$/));
  // images.forEach((picture) => {
  //   const img = new Image();
  //   img.src = picture;
  // });
  // return images;
}

function importAll(r) {
  return r.keys().map(r);
}
