import express from 'express';

import { getIssues, createIssue } from '../controllers/issues.js';

const router = express.Router();

router.get(`/`, getIssues);
router.post(`/`, createIssue);

export default router;
