import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin Naija',
    email: 'admin@skillbridge.ng',
    password: 'password123',
    role: 'admin',
    location: 'Abuja'
  },
  {
    name: 'Chidi Motors & Welding',
    email: 'chidi@motors.ng',
    password: 'password123',
    role: 'recruiter',
    location: 'Port Harcourt'
  },
  {
    name: 'Lagos Tech Hub',
    email: 'hr@lagostech.ng',
    password: 'password123',
    role: 'recruiter',
    location: 'Lagos'
  },
  {
    name: 'Ngozi Tailoring',
    email: 'ngozi@tailor.ng',
    password: 'password123',
    role: 'recruiter',
    location: 'Aba'
  },
  {
    name: 'Abuja Construction Group',
    email: 'build@abujaconstruct.ng',
    password: 'password123',
    role: 'recruiter',
    location: 'Abuja'
  },
  {
    name: 'Creative Pulse Agency',
    email: 'hello@creativepulse.ng',
    password: 'password123',
    role: 'recruiter',
    location: 'Lagos'
  },
  {
    name: 'Emeka Okafor',
    email: 'emeka@gmail.com',
    password: 'password123',
    role: 'seeker',
    skills: [
      { name: 'Welding', level: 'Intermediate' },
      { name: 'Auto Repair', level: 'Advanced' }
    ],
    experience: '5 years working at local garage',
    location: 'Port Harcourt'
  },
  {
    name: 'Aisha Bello',
    email: 'aisha@gmail.com',
    password: 'password123',
    role: 'seeker',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Advanced' }
    ],
    experience: '3 years freelance web development',
    location: 'Lagos'
  },
  {
    name: 'Oluwaseun Adeleke',
    email: 'olu.a@gmail.com',
    password: 'password123',
    role: 'seeker',
    skills: [
      { name: 'Tailoring', level: 'Advanced' },
      { name: 'Fashion Design', level: 'Intermediate' }
    ],
    experience: 'Owns a small shop making Ankara dresses',
    location: 'Ibadan'
  },
  {
    name: 'Fatima Yusuf',
    email: 'fatima.y@gmail.com',
    password: 'password123',
    role: 'seeker',
    skills: [
      { name: 'Plumbing', level: 'Intermediate' },
      { name: 'Maintenance', level: 'Beginner' }
    ],
    experience: 'Apprenticeship at Lagos Works Department',
    location: 'Lagos'
  }
];

export default users;
