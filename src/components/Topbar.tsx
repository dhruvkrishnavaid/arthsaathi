import { IconBell, IconChevronDown, IconUser } from "@tabler/icons-react";

const Topbar = () => {
  return (
    <div className="sticky top-0 z-10 flex items-center p-2 bg-white border-b">
      <form className="flex w-full px-2 py-3 border gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl">
        <button type="submit" className="cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
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
          <IconUser className="w-12 h-12 p-2 border rounded-full" />
          <div>Name Surname</div>
          <IconChevronDown />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
