import React from "react";

const GlobalLoading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="text-lg font-semibold text-base-content">
        Loading, please wait...
      </p>
    </div>
  );
};

export default GlobalLoading;
