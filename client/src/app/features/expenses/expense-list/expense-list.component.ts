import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'models/expense.model';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {
  private expenseService = inject(ExpenseService);

  // state
  expenses: Expense[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  ngOnInit() {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expenseService.getExpense().subscribe({
      next: (data) => {
        this.expenses = data;
        console.log('expenses: ', this.expenses);
      },
      error: (e) => {
        console.log('error: ', e);
        this.errorMessage = 'Could not load expenses. Is the backend running?';
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }
}
