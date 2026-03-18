import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/db';
import User from '@/lib/models/User';
import { protect } from '@/lib/utils/auth';

export async function GET(req) {
  try {
    await connectDB();
    const { user, error } = await protect();
    if (error) return NextResponse.json({ message: error }, { status: 401 });

    const userProfile = await User.findById(user._id);
    if (userProfile) {
      return NextResponse.json({
        _id: userProfile._id,
        name: userProfile.name,
        email: userProfile.email,
        role: userProfile.role,
        skills: userProfile.skills,
        experience: userProfile.experience,
        location: userProfile.location
      });
    } else {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectDB();
    const { user: authUser, error } = await protect();
    if (error) return NextResponse.json({ message: error }, { status: 401 });

    const user = await User.findById(authUser._id);
    if (user) {
      const body = await req.json();
      user.name = body.name || user.name;
      user.skills = body.skills || user.skills;
      user.experience = body.experience || user.experience;
      user.location = body.location || user.location;
      
      if (body.password) {
        user.password = body.password;
      }
      
      const updatedUser = await user.save();
      return NextResponse.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        skills: updatedUser.skills,
      });
    } else {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
