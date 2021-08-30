import Image from "next/image";

export function Tagged({ posts }) {
  return (
    <>
      <h2 className="font-bold text-xl dark:text-white">Sports</h2>

      {posts.map((post) => (
        <div
          className="flex flex-wrap md:flex-nowrap w-full items-center space-x-0 md:space-x-5"
          key={post.title}
        >
          <div className="overflow-hidden w-full md:w-1/2">
            <Image
              src="/img/placeholder-800x514.png"
              width={800}
              height={514}
              alt="tagged images"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-5">
              <p className="text-sm font-bold dark:text-white">
                Business, Travel
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                July 2, 2020
              </span>
            </div>
            <h2 className="text-md font-bold dark:text-gray-100">
              Your most unhappy customers are your greatest source of learning.
            </h2>
            <div className="flex items-center">
              <div className="h-12 w-12">
                <Image
                  src="/img/xperson_1.jpg.pagespeed.ic.ku-D0yMWz5.jpg"
                  height="260"
                  width="260"
                  alt="avatar image"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col mx-4 space-y-1">
                <strong className="text-sm dark:text-white">
                  Sergy Campbell
                </strong>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  CEO & Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
