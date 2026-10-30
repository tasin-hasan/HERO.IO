import { TAppProps } from "@/types/AppdataType";

export const getAppsData = async () => {
  const response = await fetch("http://localhost:3000//data.json", {
    cache: "force-cache"
  });
  const data:TAppProps[] = await response.json();
  return data;
};

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