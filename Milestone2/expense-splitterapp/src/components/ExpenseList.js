import React, { useState } from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, setExpenses, friends }) {
  const [amount, setAmount] = useState('');
  const [payer, setPayer] = useState('');
  const [participants, setParticipants] = useState([]);

  const handleAddExpense = () => {
    if (amount && payer && participants.length) {
      setExpenses([
        ...expenses,
        { id: expenses.length + 1, amount: parseFloat(amount), payer, participants },
      ]);
      setAmount('');
      setPayer('');
      setParticipants([]);
    }
  };

  return (
    <div className="expense-list">
      <h3>Expenses</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <select onChange={(e) => setPayer(e.target.value)} value={payer}>
        <option value="">Select Payer</option>
        {friends.map((friend) => (
          <option key={friend.id} value={friend.name}>
            {friend.name}
          </option>
        ))}
      </select>
      <select multiple onChange={(e) => setParticipants([...e.target.selectedOptions].map(o => o.value))}>
        {friends.map((friend) => (
          <option key={friend.id} value={friend.name}>
            {friend.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddExpense}>Add Expense</button>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.payer} paid ${expense.amount} for {expense.participants.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
