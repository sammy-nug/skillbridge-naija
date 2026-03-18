import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/db';
import User from '@/lib/models/User';
import Job from '@/lib/models/Job';
import users from '@/lib/data/users';
import jobs from '@/lib/data/jobs';

export async function POST(req) {
  try {
    await connectDB();
    
    await Job.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const checkTechHub = createdUsers.find(u => u.email === 'hr@lagostech.ng');
    const checkChidi = createdUsers.find(u => u.email === 'chidi@motors.ng');
    const checkNgozi = createdUsers.find(u => u.email === 'ngozi@tailor.ng');

    const sampleJobs = jobs.map((job, index) => {
      let recruiterId = checkTechHub?._id;
      if (index === 1) recruiterId = checkChidi?._id;
      if (index === 2) recruiterId = checkNgozi?._id;
      
      return { ...job, recruiterId };
    });

    await Job.insertMany(sampleJobs);

    return NextResponse.json({ message: 'Database seeded successfully for Nigerian Context!' });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
