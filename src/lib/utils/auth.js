import jwt from 'jsonwebtoken';
import { headers } from 'next/headers';
import User from '../models/User.js';
import connectDB from '../config/db.js';

export async function protect() {
  await connectDB();
  const headersList = await headers();
  const authorization = headersList.get('authorization');
  let token;

  if (authorization && authorization.startsWith('Bearer')) {
    try {
      token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'skillbridge_secret_123');
      const user = await User.findById(decoded.id).select('-password');
      return { user, error: null };
    } catch (error) {
      return { user: null, error: 'Not authorized, token failed' };
    }
  }

  return { user: null, error: 'Not authorized, no token' };
}
