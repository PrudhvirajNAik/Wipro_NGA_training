// CalculationService.js
export const CalculationService = {
    calculateTotalExpenses: (expenses) => {
      return expenses.reduce((total, expense) => total + expense.amount, 0);
    },
    calculateAmountPerPerson: (totalExpenses, numberOfPeople) => {
      return numberOfPeople > 0 ? totalExpenses / numberOfPeople : 0;
    },
    calculateBalances: (friends, expenses, amountPerPerson) => {
      return friends.map((friend) => {
        const totalPaidByFriend = expenses
          .filter((expense) => expense.payer === friend.name)
          .reduce((total, expense) => total + expense.amount, 0);
  
        return {
          friend: friend.name,
          amountOwed: totalPaidByFriend - amountPerPerson,
        };
      });
    },
    generateSummary: (balances) => {
      return balances.map((balance) => {
        if (balance.amountOwed > 0) {
          return '${balance.friend} is owed $${balance.amountOwed.toFixed(2)}';
        } else if (balance.amountOwed < 0) {
          return '${balance.friend} owes $${Math.abs(balance.amountOwed).toFixed(2)}';
        } else {
          return '${balance.friend} is settled';
        }
      });
    }
};
  
  