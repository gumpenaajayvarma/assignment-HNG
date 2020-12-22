import { takeEvery, put, call } from 'redux-saga/effects'
import { addResponse } from './utils';

function* fetchProducts (appFetchGetCli, action) {
    console.log(action)
    const response = yield call(appFetchGetCli, 'GET', 'products', 'params')
    yield put(addResponse(action, response))
}

const pattern = (action) => action.meta && action.meta.pattern === 'INIT_PRODUCTS_SIDEEFFECT' 

export default function* products(appFetchGetCli) {
    yield takeEvery(pattern, fetchProducts, appFetchGetCli)
}