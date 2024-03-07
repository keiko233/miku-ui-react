import { createBrowserRouter } from "react-router-dom";
import App from "./page/App";
import DeviceList from "./page/DeviceList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App children={<DeviceList />} />,
  },
  {
    path: "/devices/:codename",
    element: <App children={<DeviceList />} />,
  },
]);

export default router;
