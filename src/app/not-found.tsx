import Link from 'next/link';
import { Clock } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center bg-white dark:bg-black p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#008C8C] rounded-lg flex items-center justify-center">
            <Clock className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Could not find the requested resource</p>
        <Link
          href="/"
          className="inline-flex items-center bg-[#008C8C] hover:bg-[#006A6A] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}