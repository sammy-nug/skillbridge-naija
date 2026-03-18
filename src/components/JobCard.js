import { Briefcase, MapPin, Star } from 'lucide-react';

export default function JobCard({ job, matchScore, missingSkills }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col h-full">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-brand-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">{job.title}</h3>
          <p className="text-brand-700 font-medium text-sm mt-1">{job.recruiterName || 'Verified Recruiter'}</p>
        </div>
        {matchScore !== undefined && (
          <div className="flex flex-col items-end shrink-0 ml-2">
            <span className={`px-3 py-1 rounded-full text-sm font-bold ${matchScore >= 80 ? 'bg-green-100 text-green-700' : matchScore >= 50 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
              {matchScore}% Match
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
        <div className="flex items-center gap-1"><MapPin size={16} /> {job.location}</div>
        <div className="flex items-center gap-1"><Briefcase size={16} /> {job.type}</div>
      </div>

      <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">{job.description}</p>

      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Required Skills</p>
        <div className="flex flex-wrap gap-2">
          {job.requiredSkills.map((skill, i) => {
            const isMissing = missingSkills && missingSkills.includes(skill.name);
            return (
              <span key={i} className={`px-2.5 py-1 rounded-md text-xs font-medium border ${isMissing ? 'bg-gray-50 text-gray-500 border-gray-200' : 'bg-brand-50 text-brand-700 border-brand-100'}`}>
                {skill.name} <span className="text-[10px] opacity-70 ml-1">({skill.level})</span>
              </span>
            );
          })}
        </div>
      </div>

      {missingSkills && missingSkills.length > 0 && (
        <div className="bg-orange-50 rounded-lg p-3 mt-4 border border-orange-100">
          <p className="text-sm font-medium text-orange-800 flex items-center gap-2">
            <Star size={16} className="text-orange-500 shrink-0" />
            Learn {missingSkills[0]} to boost your match!
          </p>
        </div>
      )}

      <button className="w-full mt-6 bg-gray-50 hover:bg-brand-50 text-brand-700 font-bold py-2.5 rounded-xl border border-gray-200 hover:border-brand-200 transition-colors">
        View Details
      </button>
    </div>
  );
}
