export interface Expense {
  id: number, 
  title: string,
  amount: number,
  created_at: string
}

export type CreateExpenseDTO = Omit<Expense, 'id' | 'created_at'>;
