import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';
import chatbotSlice from './reducer/ChatbotReducer';
import videoSlice from './reducer/VideoReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
  chatbotSlice,
  videoSlice,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
