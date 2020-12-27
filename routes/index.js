import express from 'express';

import { getIssues, createIssue, updateIssue, deleteIssue } from '../controllers/issues.js';

const router = express.Router();

router.get(`/`, getIssues);
router.post(`/`, createIssue);
router.patch(`/:id`, updateIssue);
router.delete(`/:id`, deleteIssue);

export default router;
