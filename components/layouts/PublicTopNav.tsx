'use client';
import Link from 'next/link';


export default function PublicTopNav() {
    return (
        <header className="bg-gradient-to-r from-sky-200 via-pink-100 to-indigo-200 border-b px-8 py-5 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <span className="text-3xl">👾</span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-700 drop-shadow">AlephCode Academy</h1>
        </div>
        <Link
          href="/login/parent"
          className="bg-gradient-to-r from-pink-400 to-blue-600 hover:from-pink-500 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold transition"
        >
          Parent Login
        </Link>
      </header>
    );
}