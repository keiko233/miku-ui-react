import { createTheme, ThemeProvider } from "@mui/material/styles";
import WorkSpace from "../components/WorkSpace";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import devices from "../assets/devices.json";
import { ReactNode } from "react";

const defaultTheme = createTheme();

interface Props {
  children: ReactNode;
}

const App = ({ children }: Props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <WorkSpace
        children={children}
        drawerContainer={
          <List>
            <ListItem key={"home"} disablePadding>
              <ListItemButton>
                <ListItemText primary={"Back Home"} />
              </ListItemButton>
            </ListItem>

            {devices.map((item) => (
              <ListItem key={item.codename} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.device} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        }
      />
    </ThemeProvider>
  );
};

export default App;
