import { useState } from 'react';
import Header from './components/Header.jsx';
import Balance from './components/Balance.jsx';
import IncomeExpenses from './components/IncomeExpenses.jsx';
import './App.css';
import TransactionList from './components/TransactionList.jsx';
import AddTransaction from './components/AddTransaction.jsx';
import { GlobalProvider } from './context/GlobalContext.jsx';

function App() {

  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>

  )
}

export default App;
