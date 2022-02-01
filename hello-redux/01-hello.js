const { createStore } = require('redux');

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Pure Function
// - prédictive, appelée avec des params données elle a toujours le même retour
// ex: add(1, 2) === 3
// contre-ex : Math.random() === ????
// - pas de side-effect, pas d'appel ajax, localStorage, ou autre API externe
// - ne modifie pas ses params (donc state immuable)
// const nextState = reducer(actualState, action);

/** @type {import('redux').Store} */
const store = createStore(reducer);

const state = store.getState();
console.log('initial state', state);

// const buttonEl = document.createElement('button');
// buttonEl.addEventListener('tripleclick', (event) => {});
// buttonEl.dispatchEvent(new Event('tripleclick'));

class Component1 {
  state = {
    val: 0,
  };
  constructor() {
    store.subscribe(() => {
      const state = store.getState();
      this.state.val = state.count;
      console.log('Component 1', this.state);
    });
  }
}

class Component2 {
  state = {
    age: 0,
  };
  constructor() {
    store.subscribe(() => {
      const state = store.getState();
      this.state.age = state.count;
      console.log('Component 2', this.state);
    });
  }
}

new Component1();
new Component2();

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });