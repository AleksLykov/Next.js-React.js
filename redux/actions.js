import * as types from './types'


export const increment =() => {
    return {
        type: types.increment
    }
}

export const decrement =() => {
    return {
        type: types.decrement
    }
}

export const reset =() => {
    return {
        type: types.reset
    }
}
