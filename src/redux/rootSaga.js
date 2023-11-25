import { all } from 'redux-saga/effects';
import * as ChatbotSaga from './sagaActions/ChatbotSaga';
import * as VideoSaga from './sagaActions/VideoSaga';
import * as NewsSaga from './sagaActions/NewsSaga';

export default function* rootSaga() {
  yield all([
    //Chatbot
    ChatbotSaga.followActSendMessage(),
    VideoSaga.followActGetVideo(),
    NewsSaga.followActGetNews(),
  ]);
}
