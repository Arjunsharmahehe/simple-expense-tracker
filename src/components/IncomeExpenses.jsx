import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';

const IncomeExpenses = () => {
  const { transactions} = useContext(GlobalContext);

  // Mapping it into an array of just the amount and them adding the amount to get the income and expense respectively
  const sumPositive = transactions.map((transaction => transaction.amount > 0 ? transaction.amount : 0));
  const income = sumPositive.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const sumNegative = transactions.map((transaction => transaction.amount < 0 ? transaction.amount : 0));
  const expense = sumNegative.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expense < 0? (expense*-1).toFixed(2) : expense}</p>
        </div>
      </div>
  );
}

export default IncomeExpenses;
