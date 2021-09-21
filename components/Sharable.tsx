import { useState } from 'react';
import { FaCheck, FaFacebookF, FaShareAlt, FaTwitter } from 'react-icons/fa';

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
    <div className="mt-5 pt-5 border-t border-gray-300 dark:border-dark-muted w-full">
      <h2 className="text-base text-gray-500">Share</h2>
      <div className="flex flex-row space-x-5 text-black dark:text-white">
        <span onClick={fbShare}>
          <FaFacebookF />
        </span>
        <span onClick={twShare}>
          <FaTwitter />
        </span>
        <span>
          <FaShareAlt onClick={CopiedLinkMsg} />
        </span>
      </div>
      {/* alert */}
      {showAlert ? (
        <div className="animate-pulse fixed flex items-center space-x-2 top-5 right-5 border dark:border-dark-muted rounded-lg shadow bg-white dark:bg-dark-muted px-5 py-3">
          <p className="text-gray-500 dark:text-gray-400">
            Link copied succesfully
          </p>
          <span className="p-1 rounded-full bg-green-300">
            <FaCheck className="text-white" />
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
