import { call, put, takeLatest } from 'redux-saga/effects';
import * as SagaActionTypes from '../constants';
import { chatbotActions } from '../reducer/ChatbotReducer';
import { ChatbotService } from '~/services/api/ChatbotAPI';

function* actSendMessage(action) {
  try {
    const { message, onLoading, onFinish } = action;
    const newMessage = {
      isAnswer: false,
      content: message,
    };
    yield put(chatbotActions.sendMessage({ data: newMessage }));
    onLoading();
    const res = yield call(() => ChatbotService.postMessage(message));
    const { status, data } = res;
    console.log(res);
    if (status === 200) {
      const responseMessage = {
        isAnswer: true,
        content: data,
      };
      onFinish();
      yield put(chatbotActions.responseMessage({ data: responseMessage }));
    } else {
      //handle fail
    }
  } catch (err) {
    //handle err
  }
}

export function* followActSendMessage() {
  yield takeLatest(SagaActionTypes.SEND_MESSAGE_SAGA, actSendMessage);
}
