import { actionCreator } from "./actions-helper"

export const INIT_PRODUCTS = 'INIT_PRODUCTS'

export const initProducts = (name) => {
    const payload = {name}
    const meta = {pattern: 'INIT_PRODUCTS_SIDEEFFECT'}
    return actionCreator(INIT_PRODUCTS, payload, meta)
}
