const expensesKey = "expenses-react";

export interface ExpenseI{
description:string;
amount:number;
category:string;
date:string;	
}
export function loadExpenses() {
  const expenses: ExpenseI[] =
    JSON.parse(localStorage.getItem(expensesKey) || "null") || [];
  return expenses;
}
export function saveExpenses(expenses: ExpenseI[]) {
  localStorage.setItem(expensesKey, JSON.stringify(expenses));
}
