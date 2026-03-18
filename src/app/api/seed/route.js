import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/db';
import User from '@/lib/models/User';
import Job from '@/lib/models/Job';
import users from '@/lib/data/users';
import jobs from '@/lib/data/jobs';

export async function POST(req) {
  try {
    await connectDB();
    
    // Clear existing data
    await Job.deleteMany();
    await User.deleteMany();

    // Insert new users
    const createdUsers = await User.insertMany(users);

    // Find all recruiters
    const recruiters = createdUsers.filter(u => u.role === 'recruiter');
    
    if (recruiters.length === 0) {
      throw new Error('No recruiters found in the seed data.');
    }

    // Assign jobs to recruiters in a round-robin fashion
    const sampleJobs = jobs.map((job, index) => {
      const recruiter = recruiters[index % recruiters.length];
      return { ...job, recruiterId: recruiter._id };
    });

    await Job.insertMany(sampleJobs);

    return NextResponse.json({ message: 'Database seeded successfully with Real-life Nigerian Context!' });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
