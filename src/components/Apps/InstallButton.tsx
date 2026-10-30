"use client";
import { AppContext } from "@/context/AppProvider";
import { TAppProps } from "@/types/AppdataType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const InstallButton = ({ appData }: { appData: TAppProps }) => {
  const { installedApps, setInstalledApps } = useContext(AppContext);
  console.log(installedApps);
  const isAppAvailable = installedApps.some((app) => app.id === appData.id);

  const handleInstall = () => {
    const isAppAvailable = installedApps.some((app) => app.id === appData.id);

    if (isAppAvailable) {
      toast.error("This app is already installed");
      return;
    }

    toast.success("You have succussfully installed this app");

    setInstalledApps([...installedApps, appData]);
  };
  // console.log(installedApps);

  return (
    <button
      className={`btn btn-primary w-full sm:w-auto px-8`}
      onClick={handleInstall}
      disabled={isAppAvailable}
    >
      {isAppAvailable? "Installed": "Install"}
    </button>
  );
};

export default InstallButton;
