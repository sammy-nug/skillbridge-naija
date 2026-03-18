"use client"
import JobCard from '../../components/JobCard';

export default function JobsPage() {
  const jobs = [
    {
      _id: 1,
      title: 'Senior Frontend Developer',
      recruiterName: 'Lagos Tech Hub',
      description: 'We need an experienced React developer to lead our new Fintech product interface. Must be proficient in Next.js and Tailwind.',
      requiredSkills: [{ name: 'React', level: 'Advanced' }, { name: 'Tailwind CSS', level: 'Intermediate' }],
      location: 'Lagos',
      type: 'Hybrid'
    },
    {
      _id: 2,
      title: 'Expert Welder (Gig)',
      recruiterName: 'Chidi Motors',
      description: 'Looking for a skilled welder for a 2-week contract to fix heavy duty trucks.',
      requiredSkills: [{ name: 'Welding', level: 'Advanced' }],
      location: 'Port Harcourt',
      type: 'Onsite'
    },
    {
      _id: 3,
      title: 'Fashion Production Assistant',
      recruiterName: 'Ngozi Tailoring',
      description: 'Seeking a tailor with experience in Ankara and lace material production to assist in high-volume festive period sewing.',
      requiredSkills: [{ name: 'Tailoring', level: 'Intermediate' }, { name: 'Fashion Design', level: 'Beginner' }],
      location: 'Aba',
      type: 'Onsite'
    }
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Find Jobs & Gigs</h1>
          <p className="text-xl text-gray-600">Browse opportunities across Nigeria</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input type="text" placeholder="Search by skill, title, or company" className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none" />
          <select className="px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-brand-500 outline-none">
            <option>All Locations</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Port Harcourt</option>
            <option>Remote</option>
          </select>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-md">
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
