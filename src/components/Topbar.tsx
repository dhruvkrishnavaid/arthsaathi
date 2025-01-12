import {
  IconBell,
  IconChevronDown,
  IconSearch,
  IconUser,
} from "@tabler/icons-react";
import { useUserStore } from "../utils/user";

const Topbar = () => {
  const store = useUserStore();
  const user = store.user;
  return (
    <div className="sticky top-0 z-10 flex items-center p-2 bg-white border-b">
      <form className="flex w-full px-2 py-3 border gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl">
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
      <div className="flex items-center ml-auto gap-4">
        <IconBell />
        <button className="flex items-center w-full h-16 p-2 text-left gap-4">
          <IconUser className="w-12 h-12 p-2 border rounded-full min-w-12 min-h-12" />
          <div>
            {user?.name && user?.name?.length > 18
              ? user?.name?.slice(0, 18) + "..."
              : user?.name}
          </div>
          <IconChevronDown />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
