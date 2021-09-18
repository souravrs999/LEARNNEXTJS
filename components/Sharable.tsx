import { FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function SocialSharable({ title, slug }) {
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
      </div>
    </div>
  );
}
