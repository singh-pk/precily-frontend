import { all, fork } from 'redux-saga/effects';

import { containerSaga } from './containerData/containerDataSagas';

export default function* rootSaga() {
  yield all([fork(containerSaga)]);
}
