const { createStore } = require('redux');

// init state
const initialState = {
    age: 21
};


// create reducer (using default params if not provided argument)
const myReducer = (state = initialState, action) => {

    const newState = {...state} // copy state
    if(action.type === 'ADD') {
        newState.age = newState.age + action.val;
        return newState;
    }
    if(action.type === 'SUBSTRACT') {
        newState.age = newState.age - action.val;
        return newState;
    }



}



// create store
const store = createStore(myReducer);

// subscribe to store changes
store.subscribe(() => {
    console.log(store.getState());
})


// write actions
store.dispatch({type: 'ADD', val:10});
store.dispatch({type: 'SUBSTRACT', val:5});

