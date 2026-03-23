import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-100 blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-40 left-0 -ml-20 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10 w-full line-height-relaxed">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-brand-200">
            🚀 The smart way to find work in FCT Abuja
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
            Match with jobs based on your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-green-400">Actual Skills</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto line-clamp-3 leading-relaxed">
            Say goodbye to traditional CVs. SkillBridge Abuja connects artisans, tech talents, and freelancers directly with recruiters looking for what you can actually do in the capital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/register?role=seeker" className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/20 transition-all transform hover:-translate-y-1 block text-center">
              I'm looking for work
            </Link>
            <Link href="/register?role=recruiter" className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-lg hover:bg-brand-500 hover:shadow-xl hover:shadow-brand-500/30 transition-all transform hover:-translate-y-1 block text-center">
              I'm looking to hire
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Active Jobs', value: '2,000+' },
            { label: 'Artisans', value: '15,000+' },
            { label: 'Techies', value: '5,000+' },
            { label: 'Success Rate', value: '94%' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
