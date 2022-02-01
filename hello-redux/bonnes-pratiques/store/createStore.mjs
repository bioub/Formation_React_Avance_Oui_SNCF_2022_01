import { createStore } from "redux";
import { reducer } from "./reducer.mjs";

export const store = createStore(reducer);