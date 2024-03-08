import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Device } from "../types";
import { useState } from "react";
import DeviceDetailDialog from "./DeviceDetailDialog";

interface Props extends Device {}

const DevicesCard = ({
  device,
  name,
  version,
  android,
  status,
  selinux,
  kernelsu,
  date,
  sourcforge_url,
  changelog,
  note,
}: Props) => {
  const texts = [
    { label: "Miku UI", value: version },
    { label: "Android", value: android },
    { label: "Status", value: status },
    { label: "SELinux", value: selinux },
    { label: "Kernel SU", value: kernelsu },
    { label: "Update Date", value: date },
  ];

  const imgMap = {
    odin: "/devices/odin.png",
    mona: "/devices/mona.png",
    Sagit: "/devices/Sagit.jpg",
    Violet: "/devices/Violet.png",
    Wayne: "/devices/Wayne.png",
    zijin: "/devices/zijin.jpg",
    "mona/zijin": "/devices/mona.png",
  };

  const [dialogStatus, setDialogStatus] = useState(false);

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <CardMedia
          sx={{
            height: 140,
            backgroundSize: "contain",
          }}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          image={imgMap[device]}
          title="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name} / {device}
          </Typography>

          {texts.map((item, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              <span>
                <b>{item.label}: </b>
                {item.value}
              </span>
            </Typography>
          ))}
        </CardContent>

        <CardActions>
          <Button href={sourcforge_url} target="_blank">
            Download
          </Button>

          <Button onClick={() => setDialogStatus(true)}>Detail</Button>
        </CardActions>
      </Card>

      <DeviceDetailDialog
        open={dialogStatus}
        onClose={() => setDialogStatus(false)}
        changelog={JSON.parse(changelog)}
        note={JSON.parse(note)}
      />
    </>
  );
};

export default DevicesCard;
