import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/db';
import User from '@/lib/models/User';
import generateToken from '@/lib/utils/generateToken';

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, password, role, skills, experience, location } = body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const user = await User.create({
      name, email, password, role: role || 'seeker', skills: skills || [], experience, location
    });

    if (user) {
      return NextResponse.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      }, { status: 201 });
    } else {
      return NextResponse.json({ message: 'Invalid user data' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
