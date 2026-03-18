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
    location: 'Lagos'
  },
  {
    name: 'Kuda Bank Recruitment',
    email: 'careers@kudabank.com',
    password: 'password123',
    role: 'recruiter',
    location: 'Lagos'
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
    name: 'Lekki Gardens Maintenance',
    email: 'service@lekkigardens.com',
    password: 'password123',
    role: 'recruiter',
    location: 'Lagos'
  },
  {
    name: 'Aba Fashion Hub',
    email: 'designs@abahub.ng',
    password: 'password123',
    role: 'recruiter',
    location: 'Aba'
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
    experience: '3 years freelance web development in Yaba',
    location: 'Lagos'
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
    experience: 'Data analyst graduate from UNILAG',
    location: 'Lagos'
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
    experience: '10 years experience as an independent plumber in Ikeja',
    location: 'Lagos'
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
    experience: 'Specialist in female native wear for 5 years',
    location: 'Enugu'
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
    experience: 'Trained in renewable energy at BUK, Kano',
    location: 'Abuja'
  }
];

export default users;
