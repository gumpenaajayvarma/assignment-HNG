
export const emptyObj = {}

export const addResponse = (action, response) => {
    return ({
        type: action.type,
        payload: {...action.payload, response}
    })
}

export const urlDecoder = (location) => {
    const segments = location.pathname
    const filters = location.search.slice(1)
    return {
        segments,
        filters
    }
}