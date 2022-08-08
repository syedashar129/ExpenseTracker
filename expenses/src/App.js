import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {

  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");
  const [costs, setCosts] = useState(0);
  const [budget, setBudget] = useState("");
  const [budgets, setBudgets] = useState("");
  const [history, setHistory] = useState([]);

  const addItem = () => {
    const product = {
      id:Math.random()*100,
      value:[item, cost]
    }

    setHistory(oldHist => [...oldHist, product])
    console.log("history", history);

    setCosts(prevState => prevState + Math.floor(product.value[1]));
    console.log("Costs", costs);

    setItem("");
    setCost("");
  }

  const addBudget = () => {
    const budgetPrint = {
      value:budget
    }
    setBudgets(budgetPrint);
    console.log("Budget", budgets);
    setBudget("");
  }
  
  const clear = () => {
    setBudgets("");
    setHistory([]);
  }

  return (
    <div className="center">
      <h1 class="title">Expense Tracker Application</h1>
      <hr/>
      <h2>Budget : {budgets.value}</h2>

      
      <input
        type="text"
        placeholder="Enter your budget"
        value={budget}
        onChange={e => setBudget(e.target.value)}
      />

      <br/>
      <button onClick={addBudget}>Submit</button>

      <br/>
      <button onClick={clear}>Clear</button>

      <h2>Remaining : {budgets.value - costs}</h2>
      

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
      <table class="styled-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
        {history.map(hist => {
          return<tr key={hist.id}>
            <td>{hist.value[0]}</td>
            <td>{hist.value[1]}</td>
          </tr>
        })}
        </tbody>
      </table>

      

    </div>
  );
}

export default App;
