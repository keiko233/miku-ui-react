import { createTheme, ThemeProvider } from "@mui/material/styles";
import WorkSpace from "../components/WorkSpace";
import { List, ListItemButton, ListItemText } from "@mui/material";
import devices from "../assets/devices.json";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

interface Props {
  children: ReactNode;
}

const App = ({ children }: Props) => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState("Home");

  const Item = ({ text, link }: { text: string; link: string }) => {
    return (
      <ListItemButton
        selected={selected === text}
        onClick={() => {
          navigate(link);
          setSelected(text);
        }}
      >
        <ListItemText primary={text} />
      </ListItemButton>
    );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <WorkSpace
        children={children}
        drawerContainer={
          <List>
            <Item text="Home" link="/" />

            {devices.map((item) => (
              <Item
                key={item.codename}
                text={item.device}
                link={`/devices/${item.codename}`}
              />
            ))}
          </List>
        }
      />
    </ThemeProvider>
  );
};

export default App;
