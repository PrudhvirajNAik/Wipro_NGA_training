import React from 'react';
import './Dashboard.css';

function Dashboard({ friends, expenses }) {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const amountPerPerson = friends.length ? totalExpenses / friends.length : 0;

  const balances = friends.map(friend => {
    const totalPaidByFriend = expenses
      .filter(expense => expense.payer === friend.name)
      .reduce((total, expense) => total + expense.amount, 0);

    return {
      friend: friend.name,
      amountOwed: amountPerPerson - totalPaidByFriend,
    };
  });

  const summary = balances.map(balance => {
    if (balance.amountOwed > 0) {
      return '${balance.friend} is owed $${balance.amountOwed.toFixed(2)}';
    } else if (balance.amountOwed < 0) {
      return '${balance.friend} owes $${Math.abs(balance.amountOwed).toFixed(2)}';
    } else {
      return '${balance.friend} is settled';
    }
  });

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="overview">
        <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
        <p>Amount per person: ${amountPerPerson.toFixed(2)}</p>
        <p>Total Friends: {friends.length}</p>
      </div>

      <div className="summary">
        <h3>Summary of Balances:</h3>
        <ul>
          {summary.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
