import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {

  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");
  const [budget, setBudget] = useState("");
  const [budgets, setBudgets] = useState([]);
  const [history, setHistory] = useState([]);

  const addItem = () => {
    const product = {
      id:Math.random()*100,
      value:[item, cost]
    }

    setHistory(oldHist => [...oldHist, product])
    console.log(history);

    setItem("");
    setCost("");
  }

  const addBudget = () => {
    const budgetPrint = {
      value:budget
    }
    setBudgets(oldHistory => [...oldHistory, budgetPrint]);
    console.log(budgets);
    setBudget("");
  }

  return (
    <div className="App">

      <h1>Budget : </h1>
      {budgets.map(budget => {
        return<h1>
          {budget.value}
        </h1>
      })}

      
      <input
        type="text"
        placeholder="Enter your budget"
        value={budget}
        onChange={e => setBudget(e.target.value)}
      />

      <br/>
      <button onClick={addBudget}>Submit</button>

      <br/>
      <button>Clear</button>

      <h1>Remaining : </h1>

      <input
        type="text"
        placeholder="Enter Item"
        onChange={e => setItem(e.target.value)}
        value={item}
      />

      <br/>

      <input
        type="text"
        placeholder="Enter Cost"
        value={cost}
        onChange={e => setCost(e.target.value)}
      />

      <br/>

      <button onClick={addItem} type="submit">Submit</button>

      <h1>History</h1>
      <table>
        <tr>
          <th>Item</th>
          <th>Cost</th>
        </tr>

        {history.map(hist => {
          return<tr key={hist.id}>
            <td>{hist.value[0]}</td>
            <td>{hist.value[1]}</td>
          </tr>
        })}
      </table>

      

    </div>
  );
}

export default App;
