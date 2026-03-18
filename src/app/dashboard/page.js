"use client"
import { useState } from 'react';
import JobCard from '../../components/JobCard';
import { User, Settings, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('matches');

  const mockJobs = [
    {
      _id: 1,
      title: 'Senior Frontend Developer',
      recruiterName: 'Lagos Tech Hub',
      description: 'We need an experienced React developer to lead our new Fintech product interface. Must be proficient in Next.js and Tailwind.',
      requiredSkills: [{ name: 'React', level: 'Advanced' }, { name: 'Tailwind CSS', level: 'Intermediate' }],
      location: 'Lagos',
      type: 'Hybrid',
      matchScore: 100,
      missingSkills: []
    },
    {
      _id: 2,
      title: 'Node.js Backend Engineer',
      recruiterName: 'Paystack Junior',
      description: 'Looking for a Node.js engineer to build scalable APIs.',
      requiredSkills: [{ name: 'Node.js', level: 'Intermediate' }, { name: 'MongoDB', level: 'Intermediate' }],
      location: 'Remote',
      type: 'Remote',
      matchScore: 50,
      missingSkills: ['MongoDB']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-brand-600 text-white pt-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold">Welcome, Aisha Bello</h1>
              <p className="text-brand-100 mt-1">Lagos, Nigeria • Frontend Developer</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 text-center w-full md:w-auto">
              <div className="text-sm text-brand-100 font-medium">Profile Score</div>
              <div className="text-2xl font-bold">85% Match Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 flex gap-2 mb-8 overflow-x-auto custom-scrollbar">
          <button onClick={() => setActiveTab('matches')} className={`whitespace-nowrap px-6 py-2.5 rounded-xl font-medium transition-all ${activeTab === 'matches' ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:bg-gray-50'}`}>Smart Matches</button>
          <button onClick={() => setActiveTab('skills')} className={`whitespace-nowrap px-6 py-2.5 rounded-xl font-medium transition-all ${activeTab === 'skills' ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:bg-gray-50'}`}>My Skills</button>
          <button onClick={() => setActiveTab('learning')} className={`whitespace-nowrap px-6 py-2.5 rounded-xl font-medium transition-all ${activeTab === 'learning' ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:bg-gray-50'}`}>Learning Path</button>
        </div>

        {activeTab === 'matches' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2"><CheckCircle className="text-brand-500" /> Best Matches for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockJobs.map(job => (
                <JobCard key={job._id} job={job} matchScore={job.matchScore} missingSkills={job.missingSkills} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-2xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Manage Your Skills</h2>
            <div className="space-y-4 mb-8">
              {['React (Advanced)', 'Node.js (Intermediate)', 'Tailwind CSS (Advanced)'].map((skill, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                  <span className="font-medium text-gray-700">{skill}</span>
                  <button className="text-red-500 text-sm font-medium hover:text-red-700">Remove</button>
                </div>
              ))}
            </div>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
              + Add New Skill
            </button>
          </div>
        )}
        
        {activeTab === 'learning' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Recommended Courses</h2>
            <p className="text-gray-500 mb-6">Based on jobs you matched partially with</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <div className="border border-gray-100 p-6 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-full -mr-10 -mt-10 blur-xl"></div>
                <h3 className="font-bold text-lg mb-2">MongoDB for Node.js Developers</h3>
                <p className="text-sm text-gray-600 mb-4">Learn MongoDB to qualify for 12 more backend jobs on SkillBridge.</p>
                <div className="flex flex-wrap gap-2 justify-between items-center">
                  <span className="text-brand-600 font-bold text-sm">Free</span>
                  <button className="bg-brand-50 text-brand-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-100 transition-colors">Start Course</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
