import { all } from 'redux-saga/effects'
import products from './products.saga'
import { FetchClient } from "../web/rest/fetchClient";

const appFetchClient = new FetchClient()

const appFetchGetCli = (type, name, params, headers) => appFetchClient.get(type, name, params, headers)
function* rootSaga() {
    yield all([products(appFetchGetCli)])
}

export default rootSaga;