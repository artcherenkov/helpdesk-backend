import Organization from '../models/organization.js';
import moment from 'moment';

export const getOrganizations = async (req, res) => {
  try {
    const postMessages = await Organization.find();

    res.status(200).json(postMessages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createOrganization = async (req, res) => {
  const organization = req.body;
  const newOrganization = new Organization({ ...organization, createdAt: moment().toISOString() });

  try {
    await newOrganization.save();

    res.status(201).json(newOrganization);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
