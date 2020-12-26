import mongoose from 'mongoose';
import autoIncrement from 'mongoose-sequence';

const AutoIncrement = autoIncrement(mongoose);

const issueSchema = new mongoose.Schema({
  id: Number,
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

issueSchema.plugin(AutoIncrement, { inc_field: `id` });
const IssueModel = mongoose.model(`Issue`, issueSchema);

export default IssueModel;
