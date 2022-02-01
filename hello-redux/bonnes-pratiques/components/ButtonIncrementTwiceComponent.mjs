import { increment } from "../store/actions.mjs";
import { store } from "../store/createStore.mjs";
import { countSelector } from "../store/selectors.mjs";

export default class ButtonIncrementTwiceComponent {
  state = {
    val: 0,
  };
  constructor() {
    store.subscribe(() => {
      const state = store.getState();
      this.state.val = countSelector(state);
      console.log('ButtonIncrementTwiceComponent', this.state);
    });
  }
  handleClick() {
    store.dispatch(increment(2));
  }
}