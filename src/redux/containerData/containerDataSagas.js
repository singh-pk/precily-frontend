import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  setContainerDataSuccess,
  setContainerDataFailure,
  updateContainerDataSuccess,
  updateContainerDataFailure,
} from './containerDataAction';

import ContainerDataTypes from './containerDataTypes';

import firebaseApp from '../../config/firebaseConfig';
import { addImage, updateImage } from '../../services/services';

function* setContainerData({ payload: { file, containerId } }) {
  try {
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    yield fileRef.put(file);
    const imageUrl = yield fileRef.getDownloadURL();
    yield call(addImage, containerId, imageUrl);

    yield put(setContainerDataSuccess({ [containerId]: imageUrl }));
  } catch (err) {
    yield put(setContainerDataFailure(err));
  }
}

function* updateContainerData({ payload: { file, containerId } }) {
  try {
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    yield fileRef.put(file);
    const imageUrl = yield fileRef.getDownloadURL();
    yield call(updateImage, containerId, imageUrl);

    yield put(updateContainerDataSuccess({ containerId, imageUrl }));
  } catch (err) {
    yield put(updateContainerDataFailure(err));
  }
}

function* onSetContainerDataStart() {
  yield takeLatest(ContainerDataTypes.SET_IMG_START, setContainerData);
}

function* onUpdateContainerDataStart() {
  yield takeLatest(ContainerDataTypes.UPDATE_IMG_START, updateContainerData);
}

export function* containerSaga() {
  yield all([call(onSetContainerDataStart), call(onUpdateContainerDataStart)]);
}
