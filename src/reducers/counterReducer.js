import {SET_COUNTER, CLEAR_COUNTER, DECREASE_COUNTER, INCREASE_COUNTER} from '../actions/types';
export default (state = 0, action) => {
    switch(action.type) {
        case INCREASE_COUNTER:
            return state +1;
        case DECREASE_COUNTER: 
            return state -1;
        case CLEAR_COUNTER:
            return 0;
        case SET_COUNTER:
            return action.payload;
        default:
            return state;
    }
}