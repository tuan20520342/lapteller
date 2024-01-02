import { call, put, takeLatest } from 'redux-saga/effects';
import * as SagaActionTypes from '../constants';
import { newsActions } from '../reducer/NewsReducer';
import { NewsService } from '~/services/api/NewAPI';

function* actGetNews(action) {
  try {
    const { keyword, callback } = action;
    const res = yield call(() => NewsService.getNews(keyword ?? 'laptop'));
    const { status, data } = res;
    if (status === 200) {
      const slicedData = data.articles.slice(0, 30);
      yield put(newsActions.getNewsSuccess({ listNews: slicedData }));
      callback();
    } else {
      callback();
    }
  } catch (err) {
    //handle err
  }
}

export function* followActGetNews() {
  yield takeLatest(SagaActionTypes.GET_NEWS_SAGA, actGetNews);
}
