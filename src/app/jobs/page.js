"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from '../../components/JobCard';
import { Search, MapPin, Briefcase, Loader2 } from 'lucide-react';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('All Areas');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token');
        let url = '/api/jobs';
        let config = {};
        
        if (token) {
          url = '/api/jobs/recommendations';
          config = { headers: { Authorization: `Bearer ${token}` } };
        }

        const res = await axios.get(url, config);
        setJobs(res.data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) || 
                          job.description.toLowerCase().includes(search.toLowerCase());
    const matchesLocation = location === 'All Areas' || job.location.toLowerCase().includes(location.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">Abuja Jobs & Gigs</h1>
          <p className="text-xl text-gray-600 font-medium">Browse thousands of opportunities across FCT Abuja based on your skills.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 mb-12 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by skill, title, or keyword" 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all font-medium" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select 
              className="pl-12 pr-10 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all font-bold text-gray-700 appearance-none min-w-[200px]"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>All Areas</option>
              <option>Maitama</option>
              <option>Wuse</option>
              <option>Garki</option>
              <option>Asokoro</option>
              <option>Gwarinpa</option>
              <option>Jabi</option>
              <option>Remote</option>
            </select>
          </div>
          <button type="submit" className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-black hover:bg-brand-600 transition-all shadow-xl shadow-gray-900/10 active:scale-95 text-center">
            Search
          </button>
        </form>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-brand-600 animate-spin" />
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Latest Opportunities</h2>
              <span className="bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-wider">{filteredJobs.length} Results Found</span>
            </div>
            
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredJobs.map(job => (
                  <JobCard key={job._id} job={job} matchScore={job.matchScore} missingSkills={job.missingSkills} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-gray-300 shadow-sm">
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No jobs found matching "{search}"</h3>
                <p className="text-gray-500 font-medium">Try broadening your search or choosing a different location.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
