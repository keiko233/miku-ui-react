import { ofetch } from "ofetch";
import { Device } from "../../types";

export const getInfo = async () => {
  return await ofetch<{
    mirrors: {
      type: string;
      url: string;
    }[];
    version: string;
  }>("/api/info");
};

export const getDeivces = async () => {
  return await ofetch<Device[]>("/api/devices");
};

export const getDeivceByCodename = async (codename: string) => {
  return await ofetch<Device[]>(`/api/devices/${codename}`);
};
