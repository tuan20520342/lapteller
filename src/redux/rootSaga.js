import { all } from 'redux-saga/effects';
import * as ChatbotSaga from './sagaActions/ChatbotSaga';
import * as VideoSaga from './sagaActions/VideoSaga';

export default function* rootSaga() {
  yield all([
    //Chatbot
    ChatbotSaga.followActSendMessage(),
    VideoSaga.followActGetVideo(),
  ]);
}
