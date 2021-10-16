import React, { useState } from 'react';
import Link from 'next/link';
import { navLinks } from 'util/navLinks';

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <header>
      <div
        className={`w-80 md:hidden  h-full fixed right-0 z-50 pt-5 shadow-2xl bg-navy-light transform transition ease-in-out duration-500 ${
          collapsed ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="float-left p-5 w-full">
          <div className="block float-right relative -top-7 mt-6 h-8">
            <button
              aria-label="close menu button"
              onClick={() => setCollapsed(!collapsed)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-navy-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* links list */}
        <div className="overflow-hidden relative px-10 pt-0 h-1/2">
          <div className="flex flex-col space-y-5 text-slate-light">
            {navLinks.map((item, _idx) => (
              <Link href={item.target} key={item.link}>
                <a className="flex items-center hover:text-white link">
                  <span className="font-mono text-sm text-navy-green">
                    0{_idx + 1}.
                  </span>
                  <span> {item.link}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex mx-auto max-w-6xl bg-navy-light">
        <div className="flex justify-between py-5 mx-5 w-full">
          <div className="text-4xl font-black tracking-widest text-navy-green">
            LN
          </div>
          <div className="hidden items-center space-x-10 font-mono text-sm md:flex text-slate-light">
            {navLinks.map((item, _idx) => (
              <Link href={item.target} key={item.link}>
                <a className="flex items-center hover:text-white link">
                  <span className="font-mono text-xs text-navy-green">
                    0{_idx + 1}.
                  </span>
                  <span className=""> {item.link}</span>
                </a>
              </Link>
            ))}
          </div>
          <button
            aria-label="Open menu button"
            onClick={() => setCollapsed(!collapsed)}
            className="w-8 h-8 text-navy-green md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
