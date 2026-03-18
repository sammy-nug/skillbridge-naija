import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/db';
import Job from '@/lib/models/Job';

export async function GET(req, { params }) {
  try {
    await connectDB();
    const resolvedParams = await params;
    const job = await Job.findById(resolvedParams.id).populate('recruiterId', 'name email');
    if (job) {
      return NextResponse.json(job);
    } else {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
