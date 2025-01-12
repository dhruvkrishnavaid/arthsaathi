import {
  IconBalloon,
  IconBooks,
  IconBuildingStore,
  IconChevronDown,
  IconChevronUp,
  IconHeadset,
  IconHome,
  IconMessageCircleUser,
  IconPigMoney,
  IconRobot,
  IconSearch,
  IconSettings,
  IconTools,
  IconTrendingUp,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";
import { useUserStore } from "../utils/user";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const store = useUserStore();
  const user = store.user;
  return (
    <nav className="fixed z-20 flex flex-col h-screen p-6 bg-white border-r w-80 gap-4">
      <div className="text-2xl font-pacifico">Arthsaathi</div>
      <form className="flex px-2 py-3 border gap-4">
        <button type="submit" className="cursor-pointer">
          <IconSearch />
        </button>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="w-full outline-0"
        />
      </form>
      <ul>
        <li className="w-full h-12">
          <Link
            to="/home"
            className="flex items-center w-full h-full p-2 text-left cursor-pointer transition-colors duration-300 gap-4 hover:bg-neutral-200"
          >
            <IconHome />
            <div>Home</div>
          </Link>
        </li>
        <li className="w-full h-12">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center w-full h-full p-2 text-left cursor-pointer transition-colors duration-300 gap-4 hover:bg-neutral-200"
          >
            <IconTools />
            <div>Tools and Features</div>
            <div className="ml-auto">
              {isOpen ? <IconChevronUp /> : <IconChevronDown />}
            </div>
          </button>
        </li>
        {isOpen && (
          <ul>
            <li className="w-full h-12">
              <Link
                to="/meetings"
                className="flex items-center w-full h-full p-2 text-left cursor-pointer transition-colors duration-300 gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconUsersGroup />
                <div>Meeting Assistant</div>
              </Link>
            </li>
            <li className="w-full h-12">
              <Link
                to="/Learnings"
                className="flex items-center w-full h-full p-2 text-left cursor-pointer transition-colors duration-300 gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconBooks />
                <div>Learnings</div>
              </Link>
            </li>
            <li className="w-full h-12">
              <Link
                to="/dashboard"
                className="flex items-center w-full h-full p-2 text-left cursor-pointer transition-colors duration-300 gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconBuildingStore />
                <div>Business Support Hub</div>
              </Link>
            </li>
            <li className="w-full h-12">
              <Link
                to="/dashboard"
                className="flex items-center w-full h-full p-2 text-left cursor-pointer transition-colors duration-300 gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconRobot />
                <div>AI Assistant</div>
              </Link>
            </li>
            <li className="w-full h-12">
              <Link
                to="/dashboard"
                className="flex items-center w-full h-full p-2 text-left cursor-pointer transition-colors duration-300 gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconMessageCircleUser />
                <div>Community Chats</div>
              </Link>
            </li>
            <li className="w-full h-12">
              <Link
                to="/dashboard"
                className="flex items-center w-full h-full p-2 text-left cursor-pointer transition-colors duration-300 gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconPigMoney />
                <div>Bank Data</div>
              </Link>
            </li>
          </ul>
        )}
        <li className="w-full h-12">
          <Link
            to="/about"
            className="flex items-center w-full h-full p-2 text-left cursor-pointer transition-colors duration-300 gap-4 hover:bg-neutral-200"
          >
            <IconTrendingUp />
            <div>Timeline</div>
          </Link>
        </li>
        <li className="w-full h-12">
          <Link
            to="/about"
            className="flex items-center w-full h-full p-2 text-left cursor-pointer transition-colors duration-300 gap-4 hover:bg-neutral-200"
          >
            <IconBalloon />
            <div>New Opportunities</div>
          </Link>
        </li>
      </ul>
      <div className="flex flex-col mt-auto gap-4 h-min">
        <hr />
        <ul>
          <li className="w-full h-12">
            <Link
              to="/about"
              className="flex items-center w-full h-full p-2 text-left cursor-pointer transition-colors duration-300 gap-4 hover:bg-neutral-200"
            >
              <IconHeadset />
              <div>Support</div>
            </Link>
          </li>
          <li className="w-full h-12">
            <Link
              to="/about"
              className="flex items-center w-full h-full p-2 text-left cursor-pointer transition-colors duration-300 gap-4 hover:bg-neutral-200"
            >
              <IconSettings />
              <div>Settings</div>
            </Link>
          </li>
        </ul>
        <hr />
        <div>
          <Link
            to="/profile"
            className="flex items-center w-full h-16 p-2 text-left cursor-pointer gap-4 transition-colors duration-300 hover:bg-neutral-200"
          >
            <IconUser className="w-12 h-12 p-2 border rounded-full min-w-12 min-h-12" />
            <div>
              <div>
                {user?.name && user?.name?.length > 18
                  ? user?.name?.slice(0, 18) + "..."
                  : user?.name}
              </div>
              <div className="text-neutral-500/90">
                {user?.email.split("@")[0]}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
