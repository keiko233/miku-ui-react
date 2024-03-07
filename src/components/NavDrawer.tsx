import { Box, SxProps, useMediaQuery } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { ReactNode } from "react";

interface Props {
  drawerWidth?: number;
  children?: ReactNode;
  sxDrawer?: SxProps;
  drawerStatus?: boolean;
  onClose?: () => void;
}

const NavDrawer = ({
  drawerWidth = 240,
  children,
  sxDrawer,
  drawerStatus,
  onClose,
}: Props) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      component="nav"
      sx={{
        width: {
          sm: drawerStatus ? `${drawerWidth}px` : 0,
        },
        flexShrink: {
          sm: 0,
        },
        transition: "all 0.3s",
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        sx={{
          "& .MuiPaper-root ": {
            boxSizing: "border-box",
            width: `${drawerWidth}px`,
          },
          ...(!isSmallScreen && {
            "& .MuiDrawer-paper": {
              transition: "all 0.3s",
              transform: drawerStatus
                ? "none"
                : `translateX(-${drawerWidth}px)`,
            },
          }),
          ...sxDrawer,
        }}
        open={drawerStatus}
        onClose={onClose}
      >
        {children}
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
