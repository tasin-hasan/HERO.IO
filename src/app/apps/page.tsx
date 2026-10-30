
import AppCard from "@/components/shared/AppCard";
import { getAppsData } from "@/lib/apps";
import { TAppProps } from "@/types/AppdataType";
import React from "react";

const AppsPage = async () => {
  const appsData: TAppProps[] = await getAppsData();
  // console.log("from apps page",appsData);
  return (
    <main className="max-w-7xl mx-auto mt-20">
      {/* For  title and description */}
      <div className="text-center space-y-2">
        <h1 className="font-bold text-2xl">All Apps</h1>
        <p className="text-gray-500 text-sm mb-6">
          Explore All Apps on the Market developed by us
        </p>
      </div>

      {/* for cards */}
      <div className="grid grid-cols-4 gap-3 mb-10">
        {appsData.map((app) => (
          <div key={app.id}>
            <AppCard app={app} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default AppsPage;
