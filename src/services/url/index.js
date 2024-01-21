export const DOMAIN_NAME = process.env.REACT_APP_PROD_BE_URL;

//CHATBOT
export const URL_CHATBOT = `${DOMAIN_NAME}/ask`;
export const URL_IMG_CHAT = `${DOMAIN_NAME}/askImg`;

//VIDEO
export const URL_GET_VIDEO = (keyword) =>
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${keyword}&regionCode=us&type=video&key=${process.env.REACT_APP_YOUTUBE_KEY}&fbclid=IwAR1ZGW3RMECseUC3yoUAfLobc-XxNfLgxUw1zaAyT0FAd-O5cv7WBVhBztc`;

//NEWS
export const URL_GET_NEWS = (keyword) => `${DOMAIN_NAME}/news?q=${keyword}`;

//PRODUCT
export const URL_GET_PRODUCTS = `${DOMAIN_NAME}/getProductList`;

//SHOP
export const URL_GET_LOCALSTORES = `${DOMAIN_NAME}/getLocalStoreLocations`;
