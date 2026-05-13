import express from 'express';
import expenseRouter from './routes/expense.router';

const app = express();

app.use(express.json());

app.use('/api', expenseRouter)

export default app;