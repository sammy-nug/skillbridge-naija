# SkillBridge Abuja 🚀

SkillBridge Abuja is a full-stack job and skill-matching platform focused on the FCT Abuja market. Traditional CVs don't always capture the true capabilities of artisans, freelancers, and techies. SkillBridge connects Job Seekers and Recruiters in the capital based on specific skill overlaps (formal and informal) to provide dynamic Match Scores.

## Features

- **🎓 Skill-Based Profiles:** Users can add formal and informal skills (e.g., React, Tailoring, Welding) with proficiency levels.
- **🏢 Smart Match Algorithm:** Custom backend logic compares seeker skills against job required skills to generate a % Match Score.
- **🇳🇬 Abuja Context:** Seeded with local job data (Maitama, Wuse, Gwarinpa, etc.) for tech and artisan industries in the FCT.
- **🛡️ JWT Authentication:** Secure role-based access for Seekers, Recruiters, and Admins via Native Next.js API Routes.
- **🎨 Modern UI/UX:** Built with Next.js App Router and a vibrant Tailwind CSS glassmorphism theme with smooth micro-animations.

## Tech Stack
- Frontend: Next.js (React), Tailwind CSS, Framer Motion
- Backend: Next.js Serverless API Routes (Node.js)
- Database: MongoDB, Mongoose

## Setup Instructions

### Local Development
1. Clone the repository and navigate to `skillbridge-naija`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/skillbridge_naija
   JWT_SECRET=skillbridge_secret_123
   ```
4. Start the Next.js development server:
   ```bash
   npm run dev
   ```
5. To seed the database with sample Nigerian users and jobs, make a POST request to the seed route (e.g. using Postman, ThunderClient, or cURL):
   ```bash
   curl -X POST http://localhost:3000/api/seed
   ```
   *This automatically populates recruiters, techies, artisans, and jobs.*

### Vercel Deployment
This unified platform is highly optimized for serverless deployments on Vercel.
1. Push this repository to GitHub.
2. Import the project in the Vercel Dashboard.
3. In Project Settings -> Environment Variables, add `MONGODB_URI` (your MongoDB Atlas connection string) and `JWT_SECRET`.
4. Deploy! It will build everything in one go. You can then trigger the `/api/seed` route on your production domain to populate data.

## Testing the Match Algorithm
After seeding, log in dynamically using the mock UI or integrate real requests towards `/api/auth/login`. User `aisha@gmail.com` (password: `password123`) is set up as a tech job seeker.

Enjoy the smart way to hire in Abuja!
