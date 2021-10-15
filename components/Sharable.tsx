import { useState } from 'react';
import { FaFacebookF, FaShareAlt, FaTwitter, FaCheck } from 'react-icons/fa';

export default function SocialSharable({ title, slug }) {
  const [showAlert, setShowAlert] = useState(false);

  function fbShare() {
    window.open(
      encodeURI(
        `https://www.facebook.com/sharer/sharer.php?u=https://learnnext-blog.vercel.app/blogs/${slug}`
      ),
      'sharer',
      'toolbar=0,status=0,width=548,height=325'
    );
  }
  function twShare() {
    window.open(
      encodeURI(
        `https://twitter.com/share?lang=en&text=${title}&url=https://learnnext-blog.vercel.app/blogs/${slug}`
      ),
      'sharer',
      'toolbar=0,status=0,width=548,height=325'
    );
  }

  function CopiedLinkMsg() {
    setShowAlert(true);
    navigator.clipboard.writeText(
      `https://learnnext-blog.vercel.app/blogs/${slug}`
    );
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 1000);

    return () => clearTimeout(timer);
  }

  return (
    <div className="flex flex-col pb-12 mx-5 space-y-5">
      <h1 className="text-2xl font-bold text-slate-light">Share this blog.</h1>
      <div className="flex space-x-5 text-navy-green">
        <span onClick={fbShare} className="w-5 h-5 hover:text-navy-green">
          <FaFacebookF className="social-icon" />
        </span>
        <span onClick={twShare} className="w-5 h-5 hover:text-navy-green">
          <FaTwitter className="social-icon" />
        </span>
        <span className="w-5 h-5 hover:text-navy-green">
          <FaShareAlt onClick={CopiedLinkMsg} className="social-icon" />
        </span>
      </div>

      {showAlert ? (
        <div className="flex fixed top-5 right-5 items-center px-5 py-3 space-x-2 rounded shadow bg-navy-light">
          <p className="text-slate">Link copied succesfully</p>
          <span className="p-1 rounded-full bg-navy-dark">
            <FaCheck className="text-navy-green" />
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
