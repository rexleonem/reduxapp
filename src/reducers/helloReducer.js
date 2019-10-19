import {PRESSED_HELLO_BUTTON} from '../actions/types';
const initialState = {
    helloText: 'Press the buttons to see the magic!',
    pressedButton: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case PRESSED_HELLO_BUTTON:
            return{ pressedButton: true, helloText: 'Yeah! you pressed the button!' };
        default: 
            return state;
    }
}