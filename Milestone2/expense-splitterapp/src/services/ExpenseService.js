// ExpenseService.js
export const ExpenseService = {
    addExpense: (expenses, amount, payer, participants) => {
      const newExpense = {
        id: expenses.length + 1,
        amount,
        payer,
        participants,
      };
      return [...expenses, newExpense];
    },
    removeExpense: (expenses, id) => {
      return expenses.filter(expense => expense.id !== id);
    },
    getAllExpenses: (expenses) => {
      return expenses;
    }
  };
  