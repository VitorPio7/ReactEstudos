import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authRedurer from './auth'


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
// let store = createStore(funcReduce);
let store = configureStore({
    reducer: { value: counterReducer, auth: authRedurer }
});

export const counterActions = counterReducer.actions;
export const authActions = authRedurer.actions;

export default store;