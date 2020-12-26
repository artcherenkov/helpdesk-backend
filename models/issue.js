import mongoose from 'mongoose';

const issueSchema = new mongoose.Schema({
  id: String,
  topic: String,
  client: String,
  type: String,
  product: String,
  department: String,
  responsible: String,
  status: String,
  dueDate: Date,
  actualDueDate: Date,
  lastAnswer: String,
  priority: String,
  isExpired: String,
  description: String,
  createdAt: Date,
});

const IssueModel = mongoose.model(`Issue`, issueSchema);

export default IssueModel;
