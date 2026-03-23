import bcrypt from 'bcryptjs';

const users = [
  // ADMINS
  {
    name: 'Admin Naija',
    email: 'admin@skillbridge.ng',
    password: 'password123',
    role: 'admin',
    location: 'Abuja'
  },

  // RECRUITERS - TECH
  {
    name: 'PayStack HR',
    email: 'hr@paystack.com',
    password: 'password123',
    role: 'recruiter',
    location: 'Abuja'
  },
  {
    name: 'Kuda Bank Recruitment',
    email: 'careers@kudabank.com',
    password: 'password123',
    role: 'recruiter',
    location: 'Abuja'
  },
  {
    name: 'NITDA Abuja',
    email: 'jobs@nitda.gov.ng',
    password: 'password123',
    role: 'recruiter',
    location: 'Abuja'
  },

  // RECRUITERS - ARTISAN/CONSTRUCTION
  {
    name: 'Julius Berger Site Office',
    email: 'site.manager@jb.ng',
    password: 'password123',
    role: 'recruiter',
    location: 'Abuja'
  },
  {
    name: 'Citadel Maintenance',
    email: 'service@citadel.com',
    password: 'password123',
    role: 'recruiter',
    location: 'Abuja'
  },
  {
    name: 'Abuja Fashion Hub',
    email: 'designs@abujahub.ng',
    password: 'password123',
    role: 'recruiter',
    location: 'Abuja'
  },

  // SEEKERS - TECH
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
    experience: '3 years freelance web development in Wuse',
    location: 'Abuja'
  },
  {
    name: 'Chinedu Okoro',
    email: 'chinedu.o@gmail.com',
    password: 'password123',
    role: 'seeker',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'Power BI', level: 'Intermediate' }
    ],
    experience: 'Data analyst graduate from University of Abuja',
    location: 'Abuja'
  },

  // SEEKERS - ARTISAN
  {
    name: 'Sunday "Sunny" Plumber',
    email: 'sunny.p@gmail.com',
    password: 'password123',
    role: 'seeker',
    skills: [
      { name: 'Plumbing', level: 'Advanced' },
      { name: 'Maintenance', level: 'Advanced' }
    ],
    experience: '10 years experience as an independent plumber in Garki',
    location: 'Abuja'
  },
  {
    name: 'Blessing Tailor',
    email: 'blessing.t@gmail.com',
    password: 'password123',
    role: 'seeker',
    skills: [
      { name: 'Tailoring', level: 'Advanced' },
      { name: 'Pattern Making', level: 'Intermediate' }
    ],
    experience: 'Specialist in female native wear for 5 years in Maitama',
    location: 'Abuja'
  },
  {
    name: 'Musa Solar Tech',
    email: 'musa.s@gmail.com',
    password: 'password123',
    role: 'seeker',
    skills: [
      { name: 'Solar Installation', level: 'Advanced' },
      { name: 'Electrical Wiring', level: 'Intermediate' }
    ],
    experience: 'Trained in renewable energy at University of Abuja',
    location: 'Abuja'
  }
];

export default users;
