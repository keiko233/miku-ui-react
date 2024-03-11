import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  LinearProgress,
  SxProps,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

interface Props {
  sx: SxProps;
}

const Player = ({ sx }: Props) => {
  const [playStatus, setPlayStatus] = useState(false);

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          ...sx,
        }}
      >
        <Box>
          <CardMedia
            component="img"
            image="/cover.jpg"
            alt="Live from space album cover"
          />

          <CardContent
            sx={{
              pb: 0,
            }}
          >
            <Typography component="div">UFO(10th anniv.)</Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              青屋夏生
            </Typography>
          </CardContent>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              pl: 1,
              pr: 1,
              pb: 1,
            }}
          >
            <IconButton
              aria-label="play/pause"
              onClick={() => setPlayStatus(!playStatus)}
            >
              {playStatus ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>

            <LinearProgress
              sx={{
                width: "100%",
              }}
              variant="determinate"
              value={progress}
            />
          </Box>
        </Box>
      </Card>

      <ReactPlayer
        style={{
          display: "none",
        }}
        playing={playStatus}
        volume={1}
        loop={true}
        onProgress={(e) => setProgress(e.played * 100)}
        url="/UFO(10th anniv.) _ 初音ミク - 青屋夏生.mp3"
      />
    </>
  );
};

export default Player;
