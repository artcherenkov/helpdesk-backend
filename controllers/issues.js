import moment from 'moment';

import Issue from '../models/issue.js';

export const getIssues = async (req, res) => {
  try {
    const postMessages = await Issue.find();

    res.status(200).json(postMessages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createIssue = async (req, res) => {
  const post = req.body;
  const newPost = new Issue({ ...post, createdAt: moment().toISOString() });

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
