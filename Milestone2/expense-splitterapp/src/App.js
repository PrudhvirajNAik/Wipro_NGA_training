import React, { useState } from 'react';
import { CalculationService } from './services/CalculationSevice';
import FriendList from './components/FriendList';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';

function App() {
  const [friends, setFriends] = useState([
    { id: 1, name: 'Ram' },
    { id: 2, name: 'Koushik' },
    { id: 3, name: 'Jayanth' },
  ]);

  const [expenses, setExpenses] = useState([
    { id: 1, amount: 100, payer: 'Ram', participants: ['Ram', 'koushik'] },
    { id: 2, amount: 50, payer: 'Koushik', participants: ['Koushik', 'Jayanth'] },
    { id: 3, amount: 150, payer: 'Jayanth', participants: ['Ram', 'Jayanth'] },
  ]);

  const totalExpenses = CalculationService.calculateTotalExpenses(expenses);
  const amountPerPerson = CalculationService.calculateAmountPerPerson(totalExpenses, friends.length);
  const balances = CalculationService.calculateBalances(friends, expenses, amountPerPerson);
  const summary = CalculationService.generateSummary(balances);

  return (
    <div className="App">
      <h1>Expense Splitter</h1>
      <FriendList friends={friends} setFriends={setFriends} />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} friends={friends} />
      <ExpenseSummary friends={friends} expenses={expenses} />
      <div>
        <h3>Summary:</h3>
        <ul>
          {summary.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
