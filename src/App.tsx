import { useEffect } from "react";
import { useNavigate } from "react-router";
import "regenerator-runtime/runtime";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { useUserStore } from "./utils/user";

function App(props: { page: JSX.Element }) {
  const navigate = useNavigate();
  const store = useUserStore();
  const user = store.user;
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <div className="flex w-screen min-h-screen">
        <Sidebar />
        <div className="flex flex-col w-full ml-80">
          <Topbar />
          <div className="w-[calc(100vw-20rem)] p-6">{props.page}</div>
        </div>
      </div>
    </>
  );
}

export default App;
