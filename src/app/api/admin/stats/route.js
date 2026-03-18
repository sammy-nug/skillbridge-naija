import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/db';
import Job from '@/lib/models/Job';
import User from '@/lib/models/User';
import { protect } from '@/lib/utils/auth';

export async function GET(req) {
  try {
    await connectDB();
    const { user, error } = await protect();
    if (error) return NextResponse.json({ message: error }, { status: 401 });

    if (user.role !== 'admin') {
      return NextResponse.json({ message: 'Not authorized as admin' }, { status: 403 });
    }

    const totalUsers = await User.countDocuments({});
    const totalSeekers = await User.countDocuments({ role: 'seeker' });
    const totalRecruiters = await User.countDocuments({ role: 'recruiter' });
    const totalJobs = await Job.countDocuments({});

    return NextResponse.json({
      totalUsers,
      totalSeekers,
      totalRecruiters,
      totalJobs,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
