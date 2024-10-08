import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

// Component used as an element in the past transactions list

const Transaction = ({transaction}) => {
  const { deleteTransaction } = useContext(GlobalContext);

  // Using ternary operator to fetch the sign of the amount entered.
  const sign = transaction.amount < 0 ? '-' : '+';

  // Using ternary operator to use the correct class name for income and expense.
  const transactionType = transaction.amount < 0 ? 'minus' : 'plus';

  return (
    <li className={transactionType}>
      {transaction.text} <span>{ sign }₹{ Math.abs(transaction.amount) }</span>
      <button className="delete-btn" onClick={ () => deleteTransaction(transaction.id) }>x</button>
    </li>
  );
}

export default Transaction;
