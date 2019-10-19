import {SET_COUNTER, CLEAR_COUNTER, INCREASE_COUNTER, DECREASE_COUNTER} from './types';
export const counterIncrement = () => {
    return {
        type: INCREASE_COUNTER
    }
}
export const counterDecrement = () => {
    return {
        type: DECREASE_COUNTER
    }
}
export const counterClear = () => {
    return {
        type: CLEAR_COUNTER
    }
}
export const counterSet = (receivednumber) => {
    return {
        type: SET_COUNTER,
        payload: receivednumber,
    }
}