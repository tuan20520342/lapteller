import axios from 'axios';
import * as UrlApi from '../url';

export const ChatbotService = {
  postMessage: (message) => {
    const data = {
      question: message,
    };
    return axios.post(UrlApi.URL_CHATBOT, data);
  },
};
