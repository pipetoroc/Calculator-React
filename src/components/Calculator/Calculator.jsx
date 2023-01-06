import React, { useState } from "react";
import "./Calculator.css";
import Button from "../Button/Button";
import Display from "../Display/Display";
import ButtonClear from "../Button-clear/Button-clear";
import { evaluate } from "mathjs";

function Calculator() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    setInput(input + val);
  };
  const handleClear = () => {
    setInput("");
  };
  const calculateResult = () => {
    setInput(evaluate(input));
  };

  return (
    <div className="contenedor-calculadora">
      <Display input={input} />
      <div className="fila">
        <Button handleClick={addInput}> 1 </Button>
        <Button handleClick={addInput}> 2 </Button>
        <Button handleClick={addInput}> 3 </Button>
        <Button handleClick={addInput}> + </Button>
      </div>
      <div className="fila">
        <Button handleClick={addInput}> 4 </Button>
        <Button handleClick={addInput}> 5 </Button>
        <Button handleClick={addInput}> 6 </Button>
        <Button handleClick={addInput}> - </Button>
      </div>
      <div className="fila">
        <Button handleClick={addInput}> 7 </Button>
        <Button handleClick={addInput}> 8 </Button>
        <Button handleClick={addInput}> 9 </Button>
        <Button handleClick={addInput}> * </Button>
      </div>
      <div className="fila">
        <Button handleClick={calculateResult}> = </Button>
        <Button handleClick={addInput}> 0 </Button>
        <Button handleClick={addInput}> . </Button>
        <Button handleClick={addInput}> / </Button>
      </div>
      <ButtonClear handleClear={handleClear}>Clear</ButtonClear>
    </div>
  );
}

export default Calculator;
