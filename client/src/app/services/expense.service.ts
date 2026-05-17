import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CreateExpenseDTO, Expense, ApiResponse } from "src/app/models/expense.model";


type ExpenseAPIResponse = {
  result: Expense[],
  resultLength: number
}


@Injectable({
  providedIn: 'root'
})

export class ExpenseService {
  
  
  private http = inject(HttpClient)

  private expenseAPIurl = 'http://localhost:5000/api/expenses';


  getExpense(): Observable<Expense[]> {
    return this.http.get<ApiResponse<Expense[]>>(this.expenseAPIurl).pipe(
      map(res => res.result)
    );
  }

  addExpense(expense: CreateExpenseDTO): Observable<Expense> {
    return this.http.post<Expense>(this.expenseAPIurl, expense);
  }

  deleteExpense(id: number): Observable<void> {
    return this.http.delete<void>(`this.expenseAPIurl/${id}`);
  }
}