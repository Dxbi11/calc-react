import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem('calcHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setHistory(prevHistory => {
        const newHistory = [...prevHistory, `${input} = ${result}`];
        localStorage.setItem('calcHistory', JSON.stringify(newHistory));
        return newHistory;
      });
      setInput(result.toString());
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
            readOnly
          />
        </form>
        <div className="fixed-grid has-4-cols">
          <div className="grid">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((num) => (
              <button
                key={num}
                className="button is-dark"
                onClick={() => handleClick(num)}
              >
                {num}
              </button>
            ))}
            {['+', '-', '*', '/'].map((operator) => (
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
        <div className="history">
          <h2>Historial</h2>
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
