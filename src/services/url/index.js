export const DOMAIN_NAME = 'http://localhost:5000';

//CHATBOT
export const URL_CHATBOT = `${DOMAIN_NAME}/dialogflow`;

//VIDEO
export const URL_GET_VIDEO = (keyword) =>
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=date&q=${keyword}&regionCode=us&type=video&key=AIzaSyCiNgSYU0moB0Av1XUehPmJnxIaPeVv4eQ&fbclid=IwAR1ZGW3RMECseUC3yoUAfLobc-XxNfLgxUw1zaAyT0FAd-O5cv7WBVhBztc`;
