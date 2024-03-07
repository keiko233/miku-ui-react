export interface Device {
  id: number;
  device: string;
  name: string;
  version: string;
  android: string;
  status: "COMMUNITY" | "OFFICIAL";
  selinux: string;
  kernelsu: string;
  date: string;
  sourcforge_url: string;
  changelog: string;
  note: string;
}
