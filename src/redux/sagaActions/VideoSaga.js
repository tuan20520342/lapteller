import { call, put, takeLatest } from 'redux-saga/effects';
import * as SagaActionTypes from '../constants';
import { videoActions } from '../reducer/VideoReducer';
import { VideoService } from '~/services/api/VideoAPI';

function* actGetVideo(action) {
  try {
    const { keyword } = action;
    const res = yield call(() => VideoService.getVideo(keyword ?? 'laptop+review'));
    const { status, data } = res;
    console.log(res);
    if (status === 200) {
      yield put(videoActions.getVideoSuccess({ listVideo: data.items }));
    } else {
      //handle fail
    }
  } catch (err) {
    //handle err
  }
}

export function* followActGetVideo() {
  yield takeLatest(SagaActionTypes.GET_VIDEO_SAGA, actGetVideo);
}
