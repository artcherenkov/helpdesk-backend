import moment from 'moment';

import Issue from '../models/issue.js';
import mongoose from "mongoose";

export const getIssues = async (req, res) => {
  console.log(req.body);
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

export const updateIssue = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }
  const updatedPost = { ...req.body };

  await Issue.findByIdAndUpdate(_id, updatedPost, { new: true });
  res.json(updatedPost);
};

export const deleteIssue = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }

  await Issue.findByIdAndDelete(id);

  res.json({ message: `Post deleted successfully` });
};
