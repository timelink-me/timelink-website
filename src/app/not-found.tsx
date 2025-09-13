import Link from 'next/link';
import { Clock } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
      <div className="text-center bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#008C8C] to-[#006666] rounded-lg flex items-center justify-center">
            <Clock className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Page Not Found</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">Could not find the requested resource</p>
        <Link
          href="/"
          className="inline-flex items-center bg-[#008C8C] hover:bg-[#006666] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}