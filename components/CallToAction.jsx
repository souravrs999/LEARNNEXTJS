export default function Cta() {
  return (
    <div className="mx-auto px-12 py-12">
      <div className="flex flex-col space-y-3">
        <h2 className="text-xl font-bold dark:text-gray-100">
          Subsribe to newsletter
        </h2>
        <div className="flex flex-wrap md:flex-nowrap items-center md:space-x-5 space-y-5 md:space-y-0">
          <input
            className="h-12 w-full md:w-4/6 rounded-lg bg-white dark:bg-dark-muted border border-gray-400 dark:border-dark-muted text-gray-500 px-5"
            type="text"
            placeholder="Enter your email"
          />
          <button className="text-xs font-bold h-12 w-full md:w-2/6 rounded-full bg-yellow-600 hover:bg-white dark:hover:bg-dark-muted text-white hover:text-yellow-500 hover:shadow-md uppercase">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}
