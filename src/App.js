import { useReducer } from "react";
import DigitButton from "./DigitButton";
import "./index.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  DELETE_DIGIT: "delete-digit",
  CALL: "call",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "#" && state.currentOperand === "#") {
        return state;
      }
      if (payload.digit === "*" && state.currentOperand === "*") {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
  }
}

function App() {
  const [{ currentOperand, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="monkey-grid">
      <div className="output">
        <div className="current-operand">{currentOperand}</div>
      </div>
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <DigitButton digit="*" dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <DigitButton digit="#" dispatch={dispatch} />
      <button className="span-two">Call</button>
      <button>DEL</button>
    </div>
  );
}

export default App;
