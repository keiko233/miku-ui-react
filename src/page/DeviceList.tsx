import { Box, CircularProgress, Grid } from "@mui/material";
import { Device } from "../types";
import { useEffect, useState } from "react";
import { getDeivceByCodename, getDeivces } from "../utils/api";
import DeviceCard from "../components/DeviceCard";
import { useParams } from "react-router-dom";

const DeviceList = () => {
  const { codename } = useParams();

  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    const fetchDevices = async () => {
      setDevices([]);

      try {
        if (codename) {
          setDevices(await getDeivceByCodename(codename));
        } else {
          setDevices(await getDeivces());
        }
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    fetchDevices();
  }, [codename]);

  if (devices.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "calc(100vh - 64px - 48px)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {devices.map((device) => (
          <Grid key={device.id} item xs={12} sm={6} md={4}>
            <DeviceCard {...device} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DeviceList;
