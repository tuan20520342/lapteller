import axios from 'axios';
import * as UrlApi from '../url';

export const ChatbotService = {
  postMessage: (message) => {
    const data = {
      languageCode: 'en',
      queryText: message,
      sessionId: 'lapteller-project',
    };
    return axios.post(UrlApi.URL_CHATBOT, data);
  },
};
