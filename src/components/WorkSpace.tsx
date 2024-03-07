import { Box, Container } from "@mui/material";
import NavDrawer from "./NavDrawer";
import AppBar from "./AppBar";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  drawerContainer: ReactNode;
}

const WorkSpace = ({ children, drawerContainer }: Props) => {
  const drawerWidth = 240;

  const [drawerStatus, setDrawerStatus] = useState(true);

  return (
    <Box display="flex">
      <NavDrawer
        drawerWidth={drawerWidth}
        drawerStatus={drawerStatus}
        onClose={() => setDrawerStatus(false)}
      >
        {drawerContainer}
      </NavDrawer>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <AppBar
          sxContainer={{
            position: "fixed",
            left: {
              sm: drawerStatus ? `${drawerWidth}px` : 0,
            },
            width: {
              xs: "100%",
              sm: drawerStatus ? `calc(100% - ${drawerWidth}px)` : "100%",
            },
            transition: "all 0.3s",
          }}
          onClickMenu={() => setDrawerStatus(!drawerStatus)}
        />

        <Container
          sx={{
            padding: 3,
            marginTop: 8,
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default WorkSpace;
