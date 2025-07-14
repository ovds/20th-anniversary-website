'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  path: string;
  icon: React.ReactNode;
  activeColor: string;
  label: string;
}

const navItems: NavItem[] = [
  {
    path: '/',
    label: 'Home',
    activeColor: 'text-teal-500',
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    path: '/message-board',
    label: 'Messages',
    activeColor: 'text-red-500',
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg z-40">
      <div className="flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`group flex flex-col items-center gap-1 transition-all duration-200 hover:scale-110 ${
                isActive ? item.activeColor : 'text-gray-400'
              }`}
              aria-label={item.label}
            >
              <div className="transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </div>
              <span className={`text-xs font-medium transition-all duration-200 ${
                isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
