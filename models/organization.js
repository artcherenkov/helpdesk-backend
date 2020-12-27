import mongoose from 'mongoose';
import autoIncrement from 'mongoose-sequence';

const AutoIncrement = autoIncrement(mongoose);

const organizationSchema = new mongoose.Schema({
  id: Number,
  name: String,
  url: String,
  createdAt: Date,
});

organizationSchema.plugin(AutoIncrement, { inc_field: `org-id` });
const OrganizationModel = mongoose.model(`Organization`, organizationSchema);

export default OrganizationModel;
