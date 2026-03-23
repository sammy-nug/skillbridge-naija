"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import JobCard from '../../components/JobCard';
import { User, Settings, CheckCircle, Loader2 } from 'lucide-react';

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('matches');
  const [userData, setUserData] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newSkill, setNewSkill] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState('Intermediate');
  const [updatingSkills, setUpdatingSkills] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const [profileRes, recsRes] = await Promise.all([
          axios.get('/api/auth/profile', config),
          axios.get('/api/jobs/recommendations', config)
        ]);

        setUserData(profileRes.data);
        setRecommendations(recsRes.data);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Failed to load dashboard data. Please try logging in again.');
        if (err.response?.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          router.push('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const handleAddSkill = async (e) => {
    e.preventDefault();
    if (!newSkill.trim()) return;

    setUpdatingSkills(true);
    try {
      const token = localStorage.getItem('token');
      const updatedSkills = [...(userData.skills || []), { name: newSkill.trim(), level: newSkillLevel }];
      
      const res = await axios.put('/api/auth/profile', 
        { skills: updatedSkills },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUserData({ ...userData, skills: res.data.skills });
      setNewSkill('');
      
      // Refresh recommendations
      const recsRes = await axios.get('/api/jobs/recommendations', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRecommendations(recsRes.data);
    } catch (err) {
      console.error('Error adding skill:', err);
      alert('Failed to add skill. Please try again.');
    } finally {
      setUpdatingSkills(false);
    }
  };

  const handleRemoveSkill = async (skillName) => {
    if (!confirm(`Are you sure you want to remove ${skillName}?`)) return;

    setUpdatingSkills(true);
    try {
      const token = localStorage.getItem('token');
      const updatedSkills = userData.skills.filter(s => s.name !== skillName);
      
      const res = await axios.put('/api/auth/profile', 
        { skills: updatedSkills },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUserData({ ...userData, skills: res.data.skills });
      
      // Refresh recommendations
      const recsRes = await axios.get('/api/jobs/recommendations', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRecommendations(recsRes.data);
    } catch (err) {
      console.error('Error removing skill:', err);
      alert('Failed to remove skill. Please try again.');
    } finally {
      setUpdatingSkills(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-brand-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium tracking-wide">Loading your personalised dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-red-100">
          <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-2xl font-bold">!</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => router.push('/login')}
            className="w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-brand-600 text-white pt-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight">Welcome, {userData?.name}</h1>
              <p className="text-brand-100 mt-2 text-lg font-medium opacity-90">
                {userData?.location} • {userData?.experience || 'SkillBridge Member'}
              </p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-md border border-white/20 text-center w-full md:w-auto shadow-2xl">
              <div className="text-xs text-brand-100 font-bold uppercase tracking-widest mb-1">Your Match Score</div>
              <div className="text-3xl font-black text-white">
                {recommendations.length > 0 
                  ? `${Math.round(recommendations.reduce((acc, curr) => acc + curr.matchScore, 0) / recommendations.length)}%` 
                  : 'N/A'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 flex gap-2 mb-8 overflow-x-auto custom-scrollbar no-scrollbar">
          <button onClick={() => setActiveTab('matches')} className={`whitespace-nowrap px-8 py-3 rounded-xl font-bold transition-all duration-200 ${activeTab === 'matches' ? 'bg-brand-50 text-brand-700 shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>Smart Matches</button>
          <button onClick={() => setActiveTab('skills')} className={`whitespace-nowrap px-8 py-3 rounded-xl font-bold transition-all duration-200 ${activeTab === 'skills' ? 'bg-brand-50 text-brand-700 shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>My Skills</button>
          <button onClick={() => setActiveTab('learning')} className={`whitespace-nowrap px-8 py-3 rounded-xl font-bold transition-all duration-200 ${activeTab === 'learning' ? 'bg-brand-50 text-brand-700 shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>Learning Recommendations</button>
        </div>

        {activeTab === 'matches' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3 tracking-tight">
                <CheckCircle className="text-brand-500 w-8 h-8" /> 
                Best Matches for You
              </h2>
              <span className="bg-gray-200/50 text-gray-600 px-3 py-1 rounded-full text-sm font-bold">{recommendations.length} Jobs Found</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.length > 0 ? (
                recommendations.map(job => (
                  <JobCard 
                    key={job._id} 
                    job={job} 
                    matchScore={job.matchScore} 
                    missingSkills={job.missingSkills} 
                  />
                ))
              ) : (
                <div className="col-span-full bg-white p-12 rounded-3xl border border-dashed border-gray-300 text-center">
                  <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No matches found yet</h3>
                  <p className="text-gray-500 max-w-sm mx-auto mb-8 font-medium">Try adding more skills to your profile to get personalised suggestions.</p>
                  <button onClick={() => setActiveTab('skills')} className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/10">Add Skills</button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 max-w-3xl">
            <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Manage Your Skills</h2>
            <p className="text-gray-500 mb-10 font-medium">Adding more skills helps us find the best Abuja job opportunities for you.</p>
            
            <div className="space-y-4 mb-10">
              {userData?.skills?.length > 0 ? (
                userData.skills.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-gray-50 border border-gray-100 rounded-2xl group hover:border-brand-200 transition-all">
                    <div>
                      <span className="font-bold text-gray-900 text-lg group-hover:text-brand-700 transition-colors uppercase tracking-tight">{skill.name}</span>
                      <div className={`mt-1 text-xs font-bold uppercase tracking-widest ${skill.level === 'Advanced' ? 'text-green-600' : skill.level === 'Intermediate' ? 'text-yellow-600' : 'text-blue-600'}`}>
                        {skill.level} Level
                      </div>
                    </div>
                    <button 
                      onClick={() => handleRemoveSkill(skill.name)}
                      disabled={updatingSkills}
                      className="text-red-400 font-bold hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all disabled:opacity-50"
                    >
                      Remove
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center py-10 text-gray-400 font-medium border-2 border-dashed rounded-2xl">No skills added yet.</p>
              )}
            </div>
            
            <form onSubmit={handleAddSkill} className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Add a skill (e.g. Welding, React)" 
                className="flex-1 px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none font-medium" 
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                disabled={updatingSkills}
              />
              <select 
                className="px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none font-bold text-gray-700 bg-white"
                value={newSkillLevel}
                onChange={(e) => setNewSkillLevel(e.target.value)}
                disabled={updatingSkills}
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <button 
                type="submit"
                disabled={updatingSkills || !newSkill.trim()}
                className="bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20 whitespace-nowrap disabled:opacity-50"
              >
                {updatingSkills ? 'Adding...' : 'Add Skill'}
              </button>
            </form>
          </div>
        )}
        
        {activeTab === 'learning' && (
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Recommended for You</h2>
            <p className="text-gray-500 mb-10 font-medium">Close the skill gap and unlock more job opportunities.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              {recommendations.some(r => r.missingSkills.length > 0) ? (
                [...new Set(recommendations.flatMap(r => r.missingSkills))].slice(0, 4).map((skill, i) => (
                  <div key={i} className="border border-gray-100 p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-l-4 border-l-brand-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full -mr-16 -mt-16 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="font-black text-xl mb-3 text-gray-900 tracking-tight">{skill} Essentials</h3>
                    <p className="text-gray-600 mb-8 font-medium leading-relaxed italic">"Mastering {skill} will make you eligible for {recommendations.filter(r => r.missingSkills.includes(skill)).length} more job matches in our network."</p>
                    <div className="flex flex-wrap gap-4 justify-between items-center relative z-10">
                      <span className="bg-brand-100 text-brand-700 px-3 py-1 rounded-full font-bold text-sm tracking-wide">Free Micro-Course</span>
                      <button className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-600 transition-all shadow-lg shadow-gray-900/10">Start Learning</button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed">
                  <p className="text-gray-400 font-bold text-lg">Great job! You already have all the skills needed for your matches.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { Briefcase as BriefcaseIcon } from 'lucide-react';
