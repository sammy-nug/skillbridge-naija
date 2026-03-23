import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/db';
import Job from '@/lib/models/Job';
import User from '@/lib/models/User';
import { protect } from '@/lib/utils/auth';

export async function GET(req) {
  try {
    await connectDB();
    const { user: authUser, error } = await protect();
    if (error) return NextResponse.json({ message: error }, { status: 401 });

    const user = await User.findById(authUser._id);
    if (!user) return NextResponse.json({ message: 'User not found' }, { status: 404 });

    const jobs = await Job.find({ location: 'Abuja' }).populate('recruiterId', 'name');

    const recommendedJobs = jobs.map(job => {
      let matchedSkills = 0;
      let totalRequired = job.requiredSkills.length;
      let missingSkills = [];

      if (totalRequired === 0) {
        return { ...job.toObject(), matchScore: 100, missingSkills: [] };
      }

      job.requiredSkills.forEach(reqSkill => {
        const userHasSkill = user.skills.find(
          s => s.name.toLowerCase() === reqSkill.name.toLowerCase()
        );
        
        if (userHasSkill) {
          matchedSkills += 1;
        } else {
          missingSkills.push(reqSkill.name);
        }
      });

      const matchScore = Math.round((matchedSkills / totalRequired) * 100);

      return {
        ...job.toObject(),
        matchScore,
        missingSkills
      };
    });

    recommendedJobs.sort((a, b) => b.matchScore - a.matchScore);
    return NextResponse.json(recommendedJobs);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
