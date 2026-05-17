// The 'T' is a generic type. It means "Whatever data type I pass in".
export interface ApiResponse<T> {
  resultLength: number;
  result: T;
}


export interface Expense {
  id: number, 
  title: string,
  amount: number,
  created_at: string
}

export type CreateExpenseDTO = Omit<Expense, 'id' | 'created_at'>;
