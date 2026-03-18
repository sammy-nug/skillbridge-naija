import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'SkillBridge Naija | Smart Job & Skill Matching',
  description: 'Connect with jobs, gigs, and learning opportunities in Nigeria based on your actual skills.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gray-50 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
