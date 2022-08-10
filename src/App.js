import { StarRateOutlined } from "@mui/icons-material";
import { useReducer } from "react";
import { Howl, Howler } from "howler";
import DigitButton from "./DigitButton";
import "./index.css";
import Beep from "./audio/beep1.mp3";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  DELETE_DIGIT: "delete-digit",
  CALL_MONKEY: "call",
};

export const callMonkey = (src) => {
  console.log("monkeyyyy");

  const sound = new Howl({
    src,
    html5: true,
  });
  //make ringing sound start
  // Play the sound.
  sound.play();
  //make monkey popup
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

    case ACTIONS.DELETE_DIGIT:
      return {};
  }
}

function App() {
  const [{ currentOperand, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="phone-body">
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
        <button className="span-two" onClick={() => callMonkey(Beep)}>
          Call
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          DEL
        </button>
      </div>
    </div>
  );
}

export default App;
