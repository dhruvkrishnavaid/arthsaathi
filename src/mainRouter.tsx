import { createBrowserRouter } from "react-router";
import App from "./App";
import CreateMeet from "./pages/CreateMeet";
import Home from "./pages/Home";
import LearningContent from "./pages/LearningContent";
import Learnings from "./pages/Learnings";
import Login from "./pages/Login";
import MeetAssistHome from "./pages/MeetAssistHome";
import MeetDetails from "./pages/MeetDetails";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

const mainRouter = createBrowserRouter([
  {
    path: "",
    element: <App page={<Home />} />,
  },
  {
    path: "home",
    element: <App page={<Home />} />,
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
    path: "register",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "learnings",
    children: [
      { path: "", element: <App page={<Learnings />} /> },
      { path: ":level", element: <App page={<LearningContent />} /> },
    ],
  },
]);

export default mainRouter;
