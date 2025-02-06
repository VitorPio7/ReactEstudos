import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit'
const initialState = { counter: 0, showCounter: true }
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})
// function funcReduce(state = initialState, action) {
//     switch (action.type) {
//         case "INCREMENT":
//             return {
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter
//             }
//         case "DECREMENT":
//             return {
//                 counter: state.counter - 1,
//                 showCounter: state.showCounter
//             };
//         case "INCREASE":
//             return {
//                 counter: state.counter + action.amount,
//                 showCounter: state.showCounter
//             }
//         case "REFACTOR":
//             return {
//                 counter: 0
//             };
//         case "TOGGLE":
//             return {
//                 showCounter: !state.showCounter,
//                 counter: state.counter
//             }
//         default:
//             return state
//     }
// }
let store = createStore(counterSlice.reducer);

export default store;