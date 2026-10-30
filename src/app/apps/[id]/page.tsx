// "use client"
import InstallButton from "@/components/Apps/InstallButton";
import { formatDownloads, getAppsData } from "@/lib/apps";
import { TAppProps } from "@/types/AppdataType";
import Image from "next/image";


interface TParamsProps {
  params: Promise<{
    id: string;
  }>;
}

export const generateStaticParams = async()=> {
  const data: TAppProps[] = await getAppsData();

  return data.map((singleData)=> ({
    id: singleData.id.toString()
  }))
}


const AppDetailsPage = async ({ params }: TParamsProps) => {
  const { id } = await params;
  // console.log(id);

  const appsData: TAppProps[] = await getAppsData();
  // console.log("App data from app details",appData)

  const data = appsData.find((app) => app.id === Number(id));
  if (!data) {
    return <div>App not found</div>;
  }
  // console.log("the single data from app details page",data);

  const totalRatings = data.ratings.reduce(
    (total, rating) => total + rating.count,
    0,
  );
   //   console.log(totalRatings);

   const downloadData = formatDownloads(data.downloads);
   

  return(
    <main className="min-h-screen bg-base-200 px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* App Information */}
        <section className="card bg-base-100 shadow-xl">
          <div className="card-body gap-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-base-300 bg-white p-3">
                <Image
                  src={data.image}
                  alt={`${data.title} logo`}
                  width={100}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold">{data.title}</h1>
                <p className="mt-1 text-primary font-medium">
                  {data.companyName}
                </p>
                <p className="mt-3 text-sm leading-6 text-base-content/70">
                  {data.description}
                </p>
              </div>

              <div className="sm:self-center">
                <InstallButton appData={data}/>
              </div>
            </div>

            <div className="divider my-0" />

            {/* App Statistics */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="stat rounded-box bg-base-200 px-4 py-3">
                <div className="stat-title text-xs">Rating</div>
                <div className="stat-value text-2xl">
                  {data.ratingAvg} ★
                </div>
                <div className="stat-desc">Out of 5</div>
              </div>

              <div className="stat rounded-box bg-base-200 px-4 py-3">
                <div className="stat-title text-xs">Reviews</div>
                <div className="stat-value text-2xl">
                  {downloadData}
                </div>
                <div className="stat-desc">User reviews</div>
              </div>

              <div className="stat rounded-box bg-base-200 px-4 py-3">
                <div className="stat-title text-xs">Downloads</div>
                <div className="stat-value text-2xl">
                  {downloadData}
                </div>
                <div className="stat-desc">Total downloads</div>
              </div>

              <div className="stat rounded-box bg-base-200 px-4 py-3">
                <div className="stat-title text-xs">App Size</div>
                <div className="stat-value text-2xl">
                  {data.size} MB
                </div>
                <div className="stat-desc">Storage required</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ratings Breakdown */}
        <section className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Ratings and Reviews
            </h2>

            <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
              <div className="text-center sm:min-w-40">
                <p className="text-6xl font-bold">
                  {data.ratingAvg}
                </p>
                <div className="rating rating-md mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={
                        star <= Math.round(data.ratingAvg)
                          ? "text-warning "
                          : "text-base-700 "
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-sm text-base-content/60">
                  {/* {formatNumber(app.reviews)} reviews */}
                </p>
              </div>

              <div className="flex-1 space-y-3">
                {data.ratings.map((rating) => {
                  const percentage =
                    (rating.count / totalRatings) * 100;

                  return (
                    <div
                      key={rating.name}
                      className="flex items-center gap-3"
                    >
                      <span className="w-12 text-sm">
                        {rating.name}
                      </span>

                      <progress
                        className="progress progress-warning h-3 flex-1"
                        value={percentage}
                        max={100}
                      />

                      <span className="w-12 text-right text-sm text-base-content/60">
                        {percentage.toFixed(0)}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* About App */}
        <section className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">About this app</h2>
            <p className="leading-7 text-base-content/70">
              {data.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="badge badge-outline">Productivity</span>
              <span className="badge badge-outline">Task Manager</span>
              <span className="badge badge-outline">Organization</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AppDetailsPage;
