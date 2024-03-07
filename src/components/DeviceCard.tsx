import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Device } from "../types";

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

  return (
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

        <Typography variant="body2" color="text.secondary">
          {texts.map((item) => (
            <p>
              <b>{item.label}: </b>
              {item.value}
            </p>
          ))}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Download</Button>
        <Button size="small">Detail</Button>
      </CardActions>
    </Card>
  );
};

export default DevicesCard;
