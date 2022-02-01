import ButtonIncrementComponent from "./ButtonIncrementComponent.mjs";
import ButtonIncrementTwiceComponent from "./ButtonIncrementTwiceComponent.mjs";
import HelloComponent from "./HelloComponent.mjs";

export default function App() {
  const c1 = new ButtonIncrementComponent();
  const c2 = new ButtonIncrementTwiceComponent();
  const c3 = new HelloComponent();

  c1.handleClick();
  c3.handleChange();
  c2.handleClick();
  c1.handleClick();
  c1.handleClick();
  c1.handleClick();
}