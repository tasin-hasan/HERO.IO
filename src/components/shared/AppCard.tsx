import React from "react";
import Image from "next/image";
import { TAppProps } from "@/types/AppdataType";
import Link from "next/link";
import { formatDownloads } from "@/lib/apps";

const AppCard = ({ app }: { app: TAppProps }) => {
  const downloadData = formatDownloads(app.downloads);

  return (
    <Link href={`/apps/${app.id}`}>
      <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <figure className="px-5 pt-5">
          <Image
            src={app.image}
            alt={app.title}
            width={100}
            height={100}
            className="rounded-2xl object-cover"
          />
        </figure>

        <div className="card-body items-center text-center p-5">
          <h2 className="card-title text-lg font-bold">{app.title}</h2>

          <div className="flex items-center justify-center gap-3">
            <span className="badge badge-success gap-1 p-3">
              <span>⬇</span>
              {downloadData}
            </span>

            <span className="badge badge-warning gap-1 p-3">
              <span>⭐</span>
              {app.ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
