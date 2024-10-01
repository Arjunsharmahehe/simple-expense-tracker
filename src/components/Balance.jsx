import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Balance = () => {
  const { transactions} = useContext(GlobalContext);

  // Same logic as used in the IncomeExpense.jsx file.
  const listAmount = transactions.map((transaction => transaction.amount));
  const total = listAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const sign = total < 0? '-' : '';

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{sign}${total < 0? (total*-1).toFixed(2) : total}</h1>
    </>
  );
}

export default Balance;
