const AppsLoading = () => {
  return (
    <main className="max-w-7xl mx-auto mt-20 px-4">
      {/* Title and description */}
      <div className="text-center space-y-2 mb-8">
        <div className="skeleton h-8 w-40 mx-auto"></div>
        <div className="skeleton h-4 w-72 max-w-full mx-auto"></div>
      </div>

      {/* Skeleton cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="card bg-base-100 border border-base-300 shadow-sm"
          >
            <figure className="px-5 pt-5">
              <div className="skeleton h-24 w-24 rounded-2xl"></div>
            </figure>

            <div className="card-body items-center text-center p-5">
              {/* App title */}
              <div className="skeleton h-5 w-32"></div>

              {/* Downloads and rating */}
              <div className="flex justify-center gap-3 mt-2">
                <div className="skeleton h-7 w-20 rounded-full"></div>
                <div className="skeleton h-7 w-16 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AppsLoading;