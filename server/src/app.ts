import express from 'express';
import expenseRouter from './routes/expense.router';
import cors from 'cors';

const app = express();

// 1. System Design/Security Best Practice:
// For local development, allowing all origins is fine.
// In production, we would lock this down to your actual frontend domain.
app.use(cors({
  origin: 'http://localhost:4200', // Only allow requests from your Angular app
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
}));

app.use(express.json());

app.use('/api', expenseRouter)

export default app;