import React, { useState } from 'react';
import './styles.css'; // Archivo CSS para estilos personalizados

function Counter() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(parseInt(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(parseInt(event.target.value));
  };

  const handleSum = () => {
    setResult(num1 + num2);
  };

  const handleSubtract = () => {
    setResult(num1 - num2);
  };

  const handleReset = () => {
    setNum1(0);
    setNum2(0);
    setResult(0);
  };

  return (
    <div className="counter-container">
      <div>
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
          className="number-input"
        />
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          className="number-input"
        />
      </div>
      <div>
        <button onClick={handleSum} className="operation-button">
          Sumar
        </button>
        <button onClick={handleSubtract} className="operation-button">
          Restar
        </button>
        <button onClick={handleReset} className="reset-button">
          Reiniciar
        </button>
      </div>
      <p>Resultado: {result}</p>
    </div>
  );
}

export default Counter;
