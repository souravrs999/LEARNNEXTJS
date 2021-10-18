import { Fetcher } from '@/lib/fetcher';
import millify from 'millify';
import Link from 'next/link';
import useSWR from 'swr';

import { socialLinks } from 'util/socialLinks';

const Footer = () => {
  const { data: git, error } = useSWR('/api/git', Fetcher);

  return (
    <footer className="flex py-12 mx-auto max-w-6xl">
      <div className="flex flex-col items-center mx-5 space-y-5 w-full">
        <div className="flex mb-5 space-x-10 text-slate-light">
          {socialLinks.map((item) => (
            <a
              href={item.link}
              rel="noreferrer"
              target="_blank"
              className="w-5 h-5 hover:text-navy-green"
              key={item.social}
              aria-label={`Visit LEARNNEXT'S ${item.social} page.`}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="flex flex-col">
          <p className="text-sm tracking-wide text-center text-slate">
            Copyright @ {new Date().getFullYear()} All rights reserved
            LEARNNEXTJS
          </p>
          <div className="flex justify-center mt-4 space-x-3 text-sm tracking-widest">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-navy-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:learnnextjs@gmail.com"
              className="text-slate"
              aria-label="Mail to learnnextjs@gmail.com"
            >
              learnnextjs@gmail.com
            </a>
          </div>
          <div className="flex justify-center mt-4 space-x-3 text-sm text-slate">
            <Link href="/terms-and-conditions">
              <a className="hover:underline hover:text-navy-green">
                Terms & Conditions
              </a>
            </Link>
            <span>/</span>
            <Link href="/privacy-policy">
              <a className="hover:underline hover:text-navy-green">
                Privacy Policy
              </a>
            </Link>
          </div>
          <div className="flex justify-center items-center mt-4 space-x-2 font-mono text-xs">
            <span className="text-slate">Powered By: </span>
            <span className="text-slate-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="4.42em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 520 116"
              >
                <path
                  d="M255.42 28.976c-19.993 0-34.408 13.039-34.408 32.597c0 19.559 16.226 32.598 36.22 32.598c12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.218 6.338-15.466 6.338c-8.674 0-16.045-4.527-18.78-11.771h50.744c.399-2.029.634-4.13.634-6.339c0-19.54-14.415-32.58-34.409-32.58zM238.29 55.235c2.263-7.226 8.457-11.772 17.113-11.772c8.675 0 14.869 4.546 17.114 11.772H238.29zm212.138-26.26c-19.993 0-34.409 13.04-34.409 32.598c0 19.559 16.226 32.598 36.22 32.598c12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.217 6.338-15.465 6.338c-8.675 0-16.046-4.527-18.78-11.771H484.2c.399-2.029.634-4.13.634-6.339c0-19.54-14.415-32.58-34.408-32.58zm-17.114 26.26c2.264-7.226 8.457-11.772 17.114-11.772c8.674 0 14.868 4.546 17.113 11.772h-34.227zm-70.683 6.338c0 10.866 7.1 18.11 18.11 18.11c7.461 0 13.057-3.386 15.937-8.91l13.908 8.023c-5.759 9.598-16.552 15.375-29.845 15.375c-20.011 0-34.408-13.04-34.408-32.598s14.415-32.597 34.408-32.597c13.293 0 24.068 5.777 29.845 15.375l-13.908 8.023c-2.88-5.524-8.476-8.91-15.937-8.91c-10.992 0-18.11 7.243-18.11 18.11zM512 9.055V92.36h-16.299V9.055H512zM66.916 0l66.915 115.903H0L66.916 0zm167.298 9.055l-50.182 86.927l-50.183-86.927h18.817l31.366 54.33l31.366-54.33h18.816zm106.685 21.732v17.548c-1.811-.525-3.73-.887-5.795-.887c-10.522 0-18.11 7.244-18.11 18.11V92.36h-16.299V30.787h16.299v16.66c0-9.2 10.703-16.66 23.905-16.66z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <div className=" mt-4  w-[200px] mx-auto">
            <a
              href={git ? git.url : '#'}
              aria-label="LEARNNEXT github repo"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center space-x-5 text-xs text-slate hover:text-navy-green"
            >
              <div className="flex items-center space-x-1">
                <span className="w-4 h-4">
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
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </span>
                <span className="font-mono">
                  {git ? millify(git.stars) : '-'}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-4 h-4 font-mono">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Git Fork</title>
                    <line x1="6" y1="3" x2="6" y2="15"></line>
                    <circle cx="18" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                  </svg>
                </span>
                <span className="font-mono">
                  {git ? millify(git.forks) : '-'}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
