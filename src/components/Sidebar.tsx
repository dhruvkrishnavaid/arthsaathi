import {
  IconBalloon,
  IconBooks,
  IconBuildingStore,
  IconChevronDown,
  IconChevronUp,
  IconDots,
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
import { getUser } from "../utils/user";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = getUser();
  return (
    <nav className="fixed flex flex-col h-screen p-6 border-r w-80 gap-4">
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
            to="/"
            className="flex items-center transition-colors duration-300 w-full h-full p-2 text-left cursor-pointer gap-4 hover:bg-neutral-200"
          >
            <IconHome />
            <div>Home</div>
          </Link>
        </li>
        <li className="w-full h-12">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center transition-colors duration-300 w-full h-full p-2 text-left cursor-pointer gap-4 hover:bg-neutral-200"
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
                to="/dashboard"
                className="flex items-center transition-colors duration-300 w-full h-full p-2 text-left cursor-pointer gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconUsersGroup />
                <div>Meeting Assistant</div>
              </Link>
            </li>
            <li className="w-full h-12">
              <Link
                to="/dashboard"
                className="flex items-center transition-colors duration-300 w-full h-full p-2 text-left cursor-pointer gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconBooks />
                <div>Learnings</div>
              </Link>
            </li>
            <li className="w-full h-12">
              <Link
                to="/dashboard"
                className="flex items-center transition-colors duration-300 w-full h-full p-2 text-left cursor-pointer gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconBuildingStore />
                <div>Business Support Hub</div>
              </Link>
            </li>
            <li className="w-full h-12">
              <Link
                to="/dashboard"
                className="flex items-center transition-colors duration-300 w-full h-full p-2 text-left cursor-pointer gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconRobot />
                <div>AI Assistant</div>
              </Link>
            </li>
            <li className="w-full h-12">
              <Link
                to="/dashboard"
                className="flex items-center transition-colors duration-300 w-full h-full p-2 text-left cursor-pointer gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconMessageCircleUser />
                <div>Community Chats</div>
              </Link>
            </li>
            <li className="w-full h-12">
              <Link
                to="/dashboard"
                className="flex items-center transition-colors duration-300 w-full h-full p-2 text-left cursor-pointer gap-4 pl-9 hover:bg-neutral-200"
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
            className="flex items-center transition-colors duration-300 w-full h-full p-2 text-left cursor-pointer gap-4 hover:bg-neutral-200"
          >
            <IconTrendingUp />
            <div>Timeline</div>
          </Link>
        </li>
        <li className="w-full h-12">
          <Link
            to="/about"
            className="flex items-center transition-colors duration-300 w-full h-full p-2 text-left cursor-pointer gap-4 hover:bg-neutral-200"
          >
            <IconBalloon />
            <div>New Opportunities</div>
          </Link>
        </li>
      </ul>
      <div className="mt-auto gap-4 flex flex-col h-min">
        <hr />
        <ul>
          <li className="w-full h-12">
            <Link
              to="/about"
              className="flex items-center transition-colors duration-300 w-full h-full p-2 text-left cursor-pointer gap-4 hover:bg-neutral-200"
            >
              <IconHeadset />
              <div>Support</div>
            </Link>
          </li>
          <li className="w-full h-12">
            <Link
              to="/about"
              className="flex items-center transition-colors duration-300 w-full h-full p-2 text-left cursor-pointer gap-4 hover:bg-neutral-200"
            >
              <IconSettings />
              <div>Settings</div>
            </Link>
          </li>
        </ul>
        <hr />
        <div>
          <button className="flex items-center w-full h-16 p-2 text-left gap-4">
            <IconUser className="w-12 h-12 p-2 border rounded-full" />
            <div>
              <div>{user?.name}</div>
              <div className="text-neutral-500/90">{user?.email}</div>
            </div>
            <IconDots className="ml-auto" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
