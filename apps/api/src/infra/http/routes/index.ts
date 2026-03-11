import { Router } from 'express';

export const router = Router();

router.get('/health', (req, res) => {
  return res.json({ ok: true });
});
