import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  AppBar as MuiAppBar,
  SxProps,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface Props {
  onClickMenu?: () => void;
  sxContainer?: SxProps;
}

const AppBar = ({ onClickMenu, sxContainer }: Props) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        ...sxContainer,
      }}
    >
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onClickMenu}
          >
            <MenuIcon />
          </IconButton>

          <Typography sx={{ flexGrow: 1 }}>
            <img
              style={{
                height: "36px",
              }}
              src="/mikuui_banner.png"
              alt="logo"
            />
          </Typography>

          <Button
            variant="outlined"
            color="inherit"
            href="https://t.me/s/mikuuirelease"
            target="_blank"
            endIcon={<OpenInNewIcon />}
          >
            Channel
          </Button>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
