import { pool } from '../config/db';

export const getAllExpenses = async () => {
  const result = await pool.query('SELECT * FROM expenses ORDER BY created_at DESC');
  return result.rows;
};

export const addExpenses = async (title: string, amount: number) => {
  const result = await pool.query(`INSERT INTO expenses (title, amount) VALUES ($1, $2) RETURNING *`, [title, amount]);
  return result.rows[0];
}

export const deleteExpenses = async (id: number) => {
  const result = await pool.query(
    `DELETE FROM expenses WHERE id = $1 RETURNING *`,
    [id]
  );
  return result.rows[0];
}