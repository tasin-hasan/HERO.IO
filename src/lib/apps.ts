import { TAppProps } from "@/types/AppdataType";


export const getAppsData = async()=> {
  const baseUrl = process.env.VERCEL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`: process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch(`${baseUrl}/data.json`, {
    cache: "force-cache"
  });

  if(!response.ok) {
    throw new Error("Failed to fetch apps data");
  }

  const data: TAppProps[] = await response.json();

  return data;


}

export const formatDownloads = (downloads: number) => {
    if (downloads >= 1_000_000_000) {
      return `${(downloads / 1_000_000_000).toFixed(1)}B+`;
    }
    if (downloads >= 1_000_000) {
      return `${(downloads / 1_000_000).toFixed(1)}M+`;
    }
    if (downloads >= 1_000) {
      return `${(downloads / 1_000).toFixed(1)}K+`;
    }
    return downloads.toString();
  };