import { keyboard } from '@testing-library/user-event/dist/keyboard';

export const DOMAIN_NAME = 'http://localhost:5000';

//CHATBOT
export const URL_CHATBOT = `${DOMAIN_NAME}/ask`;
export const URL_IMG_CHAT = `${DOMAIN_NAME}/askImg`;

//VIDEO
export const URL_GET_VIDEO = (keyword) =>
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${keyword}&regionCode=us&type=video&key=AIzaSyByfLzghfCX_9hVzv0WCvb7MRqZ0-k_12M&fbclid=IwAR1ZGW3RMECseUC3yoUAfLobc-XxNfLgxUw1zaAyT0FAd-O5cv7WBVhBztc`;

//NEWS
export const URL_GET_NEWS = (keyword) =>
  `https://newsapi.org/v2/everything?q=${keyword}&sortBy=popularity&pageSize=100&apiKey=4a302fe946174a09b315117c2449b1f4`;

//PRODUCT
export const URL_GET_PRODUCTS = `${DOMAIN_NAME}/getProductList`;

//SHOP
export const URL_GET_LOCALSTORES = `${DOMAIN_NAME}/getLocalStoreLocations`;
