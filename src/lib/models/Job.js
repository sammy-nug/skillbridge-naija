import mongoose from 'mongoose';

const skillRequirementSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true }
});

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requiredSkills: [skillRequirementSchema],
  location: { type: String, required: true },
  type: { type: String, enum: ['Remote', 'Onsite', 'Hybrid'], required: true },
  recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.models.Job || mongoose.model('Job', jobSchema);
