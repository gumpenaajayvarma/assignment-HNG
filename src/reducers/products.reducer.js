import { INIT_PRODUCTS } from "../actions/init";

const initialState = {
    title : '', products : [], searchQuery : '', aggregations: [], sorts: [], totalCount: 0
}
export default function dataSets(state = initialState, action) {

    if (action.type === INIT_PRODUCTS) {
        return action.payload.response ? action.payload.response : null
    }
    return state

}