const accountsWithTransactionsData = require('../Helpers/accountsWithtransactions.json');
const getAggregateExpenses = () => {
  // const expensesArrByCategory = accountsWithTransactionsData.reduce((expenseByCategory, { transactions }) => {
  //   transactions.forEach(({ details: { type, value } }) => {
  //     if (type in expenseByCategory) expenseByCategory[type].push(parseFloat(value.amount));
  //     else expenseByCategory[type] = [parseFloat(value.amount)];
  //   });
  //   return expenseByCategory;
  // }, {});

  // return Object.entries(expensesArrByCategory).map(([category, expensesArr]) => {
  //   const avgExpense = expensesArr.reduce((sum, expense) => sum + expense) / expensesArr.length;
  //   return [category, Math.round(avgExpense)];
  // })
  return [
    ['Entertainment', 3408],
    ['Fees', 3408],
    ['Food', 3408],
    ['Health', 3408],
    ['Housing', 3408],
    ['Vehicles', 3408],
    ['Travel', 3408],
  ]
};

module.exports = getAggregateExpenses;

console.log('getAggregateExpenses() :', getAggregateExpenses().length);