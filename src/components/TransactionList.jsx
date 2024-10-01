import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Transaction from './Transaction';

// Makes a list of the past records and displays it as the history section

const TransactionList = () => {

  const { transactions} = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        { transactions.map( transaction => (
          <Transaction transaction={transaction} key={transaction.id}/>
        ))}
      </ul>
    </>
  )
}

export default TransactionList;
