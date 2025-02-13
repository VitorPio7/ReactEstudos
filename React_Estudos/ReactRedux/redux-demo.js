const redux = require('redux');
function counterReducer(state = { counter: 0 }, action) {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }

    } else if (action.type === 'refactor') {
        return {
            counter: 0
        }
    }
    return state;

}
const store = redux.createStore(counterReducer);
console.log(store.getState())
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}
store.subscribe(counterSubscriber);
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })