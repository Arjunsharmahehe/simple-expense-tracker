import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = event => {
    event.preventDefault();

    // Defining the new transaction object
    // - We define the text to be untitled if it's empty
    //   We don't to it while setting the state as it will show up in the input field as we are using
    //   it as the value for the same.
    // - We use +amount to turn the amount into and integer before entering it as the input field
    //   returns a string.
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text === "" ? "Untitled" : text,
      amount: +amount
    };
    
    addTransaction(newTransaction);
  };


  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input type="text" 
                 value={text} 
                 onChange={(event) => setText(event.target.value)} 
                 placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label>Amount <br/>
                (Negative: Expense, Positive: Income)
          </label>
          <input type="number" 
                 value={amount} 
                 onChange={(event) => setAmount(event.target.value)} 
                 placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
