import { Request, Response } from "express";
import * as expenseService from "../services/expense.service"

export const getExpenses = async(req: Request, res: Response) => {
  try {
    const data = await expenseService.fetchExpenses();
    res.status(200).json({ resultLength: data.length, result: data });
  } catch (e) {
    res.status(500).json({ message: 'Server Error: Failed to fetch expenses.' });
  }
}

export const postExpenses = async(req: Request, res: Response) => {
  try {
    const { title, amount } = req.body;
    if (!title || !amount) {
      res.status(400).json({ message: 'Server Error: Title and amount are required.' });
    }
    if (typeof amount !== 'number') {
      res.status(400).json({ message: 'Server Error: amount should be a number.' });
    }
    const newExpense = await expenseService.addExpense(title, amount);
    res.status(201).json(newExpense);
  } catch(e) {
    res.status(500).json({ message: 'Server Error: Failed to insert expense.' });
  }
}

export const deleteExpenses = async(req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (!id) {
      res.status(401).json({ message: 'Server Error: Invalid Id.' });
    }
    const deleted = await expenseService.removeExpense(id);
    if (!deleted) {
      res.status(404).json({ message: 'Server Error: Expense not found.' });
    }
    res.json({ message: 'Deleted successfully', data: deleted });
  } catch(e) {
    res.status(500).json({ message: 'Server Error: Failed delete expense.' })
  }
}