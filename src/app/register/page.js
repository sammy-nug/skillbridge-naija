"use client"
import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultRole = searchParams.get('role') || 'seeker';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: defaultRole,
    location: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: implement real registration
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Join SkillBridge</h2>
          <p className="text-gray-500 mt-2">Create your account to get started</p>
        </div>

        <div className="flex p-1 bg-gray-100 rounded-lg mb-6">
          <button 
            type="button"
            onClick={() => setFormData({...formData, role: 'seeker'})}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${formData.role === 'seeker' ? 'bg-white shadow-sm text-brand-600' : 'text-gray-500'}`}
          >
            Job Seeker
          </button>
          <button 
            type="button"
            onClick={() => setFormData({...formData, role: 'recruiter'})}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${formData.role === 'recruiter' ? 'bg-white shadow-sm text-brand-600' : 'text-gray-500'}`}
          >
            Recruiter
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name / Company Name</label>
            <input name="name" type="text" required onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none" placeholder="e.g. Chidi Motors" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input name="email" type="email" required onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input name="location" type="text" required onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none" placeholder="e.g. Lagos, Abuja, Port Harcourt" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input name="password" type="password" required onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none" placeholder="••••••••" />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-brand-600 mt-2 text-white font-bold py-3 rounded-lg hover:bg-brand-700 shadow-lg shadow-brand-500/30">
            {loading ? 'Processing...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account? <Link href="/login" className="text-brand-600 font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default function Register() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
