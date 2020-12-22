export function actionCreator (type, payload, meta) {
    return {
        type: type,
        payload: payload,
        meta: meta
    }
}