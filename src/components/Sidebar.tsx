import {
    IconArchive,
    IconChartBar,
    IconChartPie2,
    IconChevronDown,
    IconChevronUp,
    IconDots,
    IconFile,
    IconHelp,
    IconHome,
    IconSearch,
    IconSettings,
    IconStack2,
    IconStar,
    IconTrendingUp,
    IconUser,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            className="flex items-center w-full h-full p-2 text-left cursor-pointer gap-4 hover:bg-neutral-200"
          >
            <IconHome />
            <div>Home</div>
          </Link>
        </li>
        <li className="w-full h-12">
          <Link
            to="/about"
            className="flex items-center w-full h-full p-2 text-left cursor-pointer gap-4 hover:bg-neutral-200"
          >
            <IconStar />
            <div>Saved</div>
            <div className="px-4 ml-auto border rounded-2xl">24</div>
          </Link>
        </li>
        <li className="w-full h-12">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center w-full h-full p-2 text-left cursor-pointer gap-4 hover:bg-neutral-200"
          >
            <IconChartPie2 />
            <div>Dashboard</div>
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
                className="flex items-center w-full h-full p-2 text-left cursor-pointer gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconTrendingUp />
                <div>Trends</div>
              </Link>
            </li>
            <li className="w-full h-12">
              <Link
                to="/dashboard"
                className="flex items-center w-full h-full p-2 text-left cursor-pointer gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconChartBar />
                <div>Analytics</div>
              </Link>
            </li>
            <li className="w-full h-12">
              <Link
                to="/dashboard"
                className="flex items-center w-full h-full p-2 text-left cursor-pointer gap-4 pl-9 hover:bg-neutral-200"
              >
                <IconArchive />
                <div>Historical</div>
              </Link>
            </li>
          </ul>
        )}
        <li className="w-full h-12">
          <Link
            to="/about"
            className="flex items-center w-full h-full p-2 text-left cursor-pointer gap-4 hover:bg-neutral-200"
          >
            <IconStack2 />
            <div>Projects</div>
          </Link>
        </li>
        <li className="w-full h-12">
          <Link
            to="/about"
            className="flex items-center w-full h-full p-2 text-left cursor-pointer gap-4 hover:bg-neutral-200"
          >
            <IconFile />
            <div>Documents</div>
          </Link>
        </li>
      </ul>
      <div className="mt-auto h-min">
        <ul className="py-4 border-t">
          <li className="w-full h-12">
            <Link
              to="/about"
              className="flex items-center w-full h-full p-2 text-left cursor-pointer gap-4 hover:bg-neutral-200"
            >
              <IconHelp />
              <div>Support</div>
            </Link>
          </li>
          <li className="w-full h-12">
            <Link
              to="/about"
              className="flex items-center w-full h-full p-2 text-left cursor-pointer gap-4 hover:bg-neutral-200"
            >
              <IconSettings />
              <div>Settings</div>
            </Link>
          </li>
        </ul>
        <div className="py-4 border-t">
          <button className="flex items-center w-full h-16 p-2 text-left gap-4">
            <IconUser className="w-12 h-12 p-2 border rounded-full" />
            <div>
              <div>Name Surname</div>
              <div className="text-neutral-500">hello@relume.io</div>
            </div>
            <IconDots className="ml-auto" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
