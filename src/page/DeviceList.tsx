import { Box, Grid } from "@mui/material";
import { Device } from "../types";
import { useState } from "react";
import { getDeivces } from "../utils/api";
import DeviceCard from "../components/DeviceCard";

const DeviceList = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  const requestDevices = async () => {
    setDevices(await getDeivces());
  };

  requestDevices();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {devices.map((device) => (
          <Grid item xs={12} sm={6} md={4}>
            <DeviceCard {...device} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DeviceList;
