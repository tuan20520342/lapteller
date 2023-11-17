import { all } from 'redux-saga/effects';
import * as ChatbotSaga from './sagaActions/ChatbotSaga';

export default function* rootSaga() {
  yield all([
    //Chatbot
    ChatbotSaga.followActSendMessage(),
  ]);
}
