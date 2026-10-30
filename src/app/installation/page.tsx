"use client";
import { AppContext } from "@/context/AppProvider";
import Image from "next/image";
import React, { useContext } from "react";

const Installation = () => {
  const { installedApps, setInstalledApps } = useContext(AppContext);

  const handleOnclick = (id: number)=> {
    // console.log(id);
    const newApps = installedApps.filter((app) => app.id !== id);

    setInstalledApps([...newApps]);
  }

  return (
    <main className="max-w-7xl mx-auto mt-10 px-4 pb-10">
      <h2 className="text-2xl font-bold text-center">All Installed Apps</h2>

      <p className="text-center text-gray-500 mt-2">
        Explore all your installed apps.
      </p>

      <div className="mt-8 space-y-4">
        {installedApps.length === 0 ? (
          <div className="text-center py-16 bg-base-200 rounded-xl">
            <h3 className="text-xl font-semibold">No Apps Installed!</h3>
            <p className="text-gray-500 mt-2">
              Install some apps to see them here.
            </p>
          </div>
        ) : (
          installedApps.map((app) => (
            <div
              key={app.id}
              className="flex w-full items-center gap-4 rounded-xl border border-base-300 bg-base-100 p-4 shadow-md"
            >
              {/* App Image */}
              <figure className="h-20 w-20 shrink-0 rounded-xl bg-base-200 p-2">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </figure>

              {/* App Information */}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold">{app.title}</h3>
                <p className="text-sm text-gray-500">{app.companyName}</p>

                <div className="mt-2 flex items-center gap-5 text-sm">
                  <span className="font-medium text-primary">
                    {app.size} MB
                  </span>

                  <span className="font-medium text-warning">
                    ★ {app.ratingAvg}
                  </span>
                </div>
              </div>

              {/* Uninstall Button */}
              <button
               onClick={()=> handleOnclick(app.id)}
                className="btn btn-error btn-sm sm:btn-md shrink-0"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Installation;
