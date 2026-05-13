import * as expenseModel from "../models/expense.model";

export const fetchExpenses = async () => {
  return expenseModel.getAllExpenses();
}

export const addExpense = async (title: string, amount: number) => {
  return expenseModel.addExpenses(title, amount);
}

export const removeExpense = async (id: number) => {
  return expenseModel.deleteExpenses(id);
}