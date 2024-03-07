import { ofetch } from "ofetch";

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
  return await ofetch("/api/devices");
};

export const getDeivceByCodename = async (codename: string) => {
  return await ofetch(`/api/devices/${codename}`);
};
