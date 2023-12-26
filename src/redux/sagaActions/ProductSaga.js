import { call, put, takeLatest } from 'redux-saga/effects';
import * as SagaActionTypes from '../constants';
import { productActions } from '../reducer/ProductReducer';
import { ProductService } from '~/services/api/ProductAPI';

function* actGetProducts(action) {
  try {
    const { productName } = action;
    const res = yield call(() => ProductService.getProducts(productName ?? 'Iphone15'));
    const { status, data } = res;
    console.log(res);
    if (status === 200) {
      const slicedData = data.slice(0, 10);
      yield put(productActions.getProductsSuccess({ listProducts: slicedData }));
    } else {
    }
  } catch (err) {
    //handle err
  }
}

export function* followActGetProducts() {
  yield takeLatest(SagaActionTypes.GET_PRODUCTS_SAGA, actGetProducts);
}
