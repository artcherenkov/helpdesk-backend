import express from 'express';

import { getOrganizations, createOrganization } from '../controllers/organization.js';

const organizations = express.Router();

organizations.get(`/`, getOrganizations);
organizations.post(`/`, createOrganization);

export default organizations;
