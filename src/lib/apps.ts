import { TAppProps } from "@/types/AppdataType";
import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const getAppsData = async (): Promise<TAppProps[]> => {
  const filePath = path.join(process.cwd(), "public", "data.json");

  const fileData = await readFile(filePath, "utf-8");

  return JSON.parse(fileData) as TAppProps[];
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