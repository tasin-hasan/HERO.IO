import { TAppProps } from "@/types/AppdataType";
import AppCard from "../shared/AppCard";
import { getAppsData } from "@/lib/apps";

const TrendingApps = async () => {
  const appsdata: TAppProps[] = await getAppsData();

  return (
    <main className="max-w-7xl mx-auto mt-20">
      {/* For  title and description */}
      <div className="text-center space-y-2">
        <h1 className="font-bold text-2xl">Trending Apps</h1>
        <p className="text-gray-500 text-sm mb-6">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* for cards */}
      <div className="grid grid-cols-4 gap-3 mb-10">
        {appsdata.slice(0, 8).map((app) => (
          <div key={app.id}>
            <AppCard app={app} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-20">
        <button className="btn btn-primary">Show All</button>
      </div>
    </main>
  );
};

export default TrendingApps;
