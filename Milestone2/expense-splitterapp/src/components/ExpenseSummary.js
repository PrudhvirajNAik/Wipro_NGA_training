import React from 'react';
import './ExpenseSummary.css';

function ExpenseSummary({ friends, expenses }) {
  const totalExpenses = expenses.reduce((total, expenses) => total + expenses.amount, 0);
  const amountPerPerson = friends.length ? totalExpenses / friends.length : 0;

  // Calculate how much each friend has paid and what they owe or are owed
  const balances = friends.map((friend) => {
    const totalPaidByFriend = expenses
      .filter((expenses) => expenses.payer === friend.name)
      .reduce((total, expenses) => total + expenses.amount, 0);

    return {
      friend: friend.name,
      amountOwed: totalPaidByFriend - amountPerPerson,
    };
  });

  // Generate summary of who owes whom
  const summary = balances.map((balance) => {
    if (balance.amountOwed > 0) {
      return '${balance.friend} is owed $${balance.amountOwed.toFixed(2)}';
      //
    } else if (balance.amountOwed < 0) {
      return '${balance.friend} owes $${Math.abs(balance.amountOwed).toFixed(2)}';
      //
    } else {
      return '${balance.friend} is settled';
      //
    }
  });

  return (
    <div className="expense-summary">
      <h3>Expense Summary</h3>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <p>Amount per person: ${amountPerPerson.toFixed(2)}</p>
      <ul>
        {summary.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseSummary;
