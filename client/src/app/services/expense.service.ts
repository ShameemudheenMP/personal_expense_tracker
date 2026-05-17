import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateExpenseDTO, Expense } from "models/expense.model";

@Injectable({
  providedIn: 'root'
})

export class ExpenseService {
  private http = inject(HttpClient)

  private expenseAPIurl = 'http://localhost:3000/api/expenses';


  getExpense(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expenseAPIurl);
  }

  addExpense(expense: CreateExpenseDTO): Observable<Expense> {
    return this.http.post<Expense>(this.expenseAPIurl, expense);
  }

  deleteExpense(id: number): Observable<void> {
    return this.http.delete<void>(`this.expenseAPIurl/${id}`);
  }
}