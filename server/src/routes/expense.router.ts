import { Router } from 'express';
import { getExpenses, postExpenses, deleteExpenses } from '../controllers/expense.controller';

const router = Router();
router.get('/expenses', getExpenses);
router.post('/expenses', postExpenses);
router.delete('/expenses/:id', deleteExpenses);

export default router;