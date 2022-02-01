import { useDispatch, useSelector } from "react-redux";
import { Counter } from "./Counter";
import { countActions } from "./store/slices";
import { countSelector } from "./store/selectors";

export function CounterContainer() {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(countActions.increment(1));
  }

  return <Counter count={count} onIncrement={handleIncrement} />
}