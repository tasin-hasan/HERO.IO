
import React from "react";
import Link from "next/link";

const NotfoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl md:text-9xl font-extrabold text-primary">
          404
        </h1>

        <div className="text-5xl mb-6">🔍</div>

        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Oops! Page Not Found
        </h2>

        <p className="text-base-content/70 mb-8">
          The page you are looking for does not exist,
          may have been moved, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn btn-primary">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotfoundPage;
