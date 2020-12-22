import { actionCreator } from "./actions-helper"

export const GET_DATA = 'GET_DATA'

export const getProductsData = (response) => {
    return actionCreator(GET_DATA)
}