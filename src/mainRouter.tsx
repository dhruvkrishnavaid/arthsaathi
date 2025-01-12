import { createBrowserRouter } from "react-router";
import App from "./App";
import Login from "./pages/Login";
import MeetAssistHome from "./pages/MeetAssistHome";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import CreateMeet from "./pages/CreateMeet";
import MeetDetails from "./pages/MeetDetails";

const mainRouter = createBrowserRouter([
  {
    path: "",
    element: <App page={<MeetAssistHome />} />,
  },
  {
    path: "profile",
    element: <App page={<Profile />} />,
  },
  {
    path: "meetings",
    children: [
      { path: "", element: <App page={<MeetAssistHome />} /> },
      { path: "create", element: <App page={<CreateMeet />} /> },
      { path: ":id", element: <App page={<MeetDetails />} /> },
    ],
  },
  {
    path: "new-meeting",
    element: <App page={<MeetAssistHome />} />,
  },
  {
    path: "register",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default mainRouter;
