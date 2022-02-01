import { updateName } from "../store/actions.mjs";
import { store } from "../store/createStore.mjs";
import { nameSelector } from "../store/selectors.mjs";

export default class HelloComponent {
  state = {
    name: 'Toto',
  };
  constructor() {
    store.subscribe(() => {
      const state = store.getState();
      this.state.name = nameSelector(state);
      console.log('HelloComponent', this.state);
    });
  }
  handleChange() {
    store.dispatch(updateName('Titi'));
  }
}