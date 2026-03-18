import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/db';
import Job from '@/lib/models/Job';
import { protect } from '@/lib/utils/auth';

export async function GET(req) {
  try {
    await connectDB();
    const jobs = await Job.find({}).populate('recruiterId', 'name email');
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const { user, error } = await protect();
    if (error) return NextResponse.json({ message: error }, { status: 401 });

    if (user.role !== 'recruiter' && user.role !== 'admin') {
      return NextResponse.json({ message: 'Not authorized as recruiter' }, { status: 403 });
    }

    const { title, description, requiredSkills, location, type } = await req.json();
    const job = new Job({
      title,
      description,
      requiredSkills,
      location,
      type,
      recruiterId: user._id,
    });

    const createdJob = await job.save();
    return NextResponse.json(createdJob, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
