import React, { useState } from 'react';

import './App.css';

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input)); 
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title is-1'>Calculadora</h1>
      </header>
      <div className="content is-vcentered has-text-centered">
        <form>
          <input
            className="input"
            type="text"
            id="calcDisplay"
            name="ans"
            value={input}
          />
        </form>
        <div className="fixed-grid has-4-cols">

          <div className="grid">


            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((num) => ( // Esto es parecido a un for para crear los botones 
              <button
                className="button is-dark"
                onClick={() => handleClick(num)}
              >
                {num}
              </button>

            ))}



            {['+', '-', '*', '/'].map((operator) => ( // otra vez esto es como otro for aun adetro del mismo div del grid, entonces se ponen ahi los botones
              <button
                key={operator}
                className="button is-info"
                onClick={() => handleClick(operator)}
              >
                {operator}
              </button>
            ))}
            <button className="button is-warning" onClick={handleClear}>C</button>
            <button className="button is-primary" onClick={handleCalculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
