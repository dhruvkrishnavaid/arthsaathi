import { IconArrowRight, IconDots } from "@tabler/icons-react";
import { useEffect } from "react";
import { Link } from "react-router";
import { postUrl } from "../utils/fetchUrl";
import { useUserStore } from "../utils/user";

const Learnings = () => {
  const store = useUserStore();
  useEffect(() => {
    postUrl({ email: store.user?.email }, "/createTutorial");
  });
  return (
    <div className="p-4">
      <div className="text-2xl font-semibold">Learnings</div>
      <div>Track your learnings here...</div>
      <div className="flex overflow-x-auto">
        {/* first card */}
        <div className="mt-5 mr-5">
          <div className="flex border w-sm">
            <div className="flex flex-col p-4">
              <div className="flex">
                <div className="my-2 text-xl font-semibold">Beginner Level</div>
                <div className="pr-3 ml-auto text-2xl font-semibold cursor-pointer">
                  <IconDots />
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-1 bg-green-600 rounded-full h-min w-min text-md"></div>
                <div className="px-2 text-sm">Easy</div>
              </div>
              <div className="my-2 ml-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </div>
              <Link
                to="/learnings/beginner"
                className="flex justify-between w-full p-4 bg-white border cursor-pointer text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white"
              >
                <span>View Courses</span>
                <IconArrowRight />
              </Link>
            </div>
          </div>
        </div>
        {/* second card */}
        <div className="mt-5 mr-5">
          <div className="flex border w-sm">
            <div className="flex flex-col p-4">
              <div className="flex">
                <div className="my-2 text-xl font-semibold">
                  Intermediate Level
                </div>
                <div className="pr-3 ml-auto text-2xl font-semibold cursor-pointer">
                  <IconDots />
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-1 bg-yellow-600 rounded-full h-min w-min text-md"></div>
                <div className="px-2 text-sm">Medium</div>
              </div>
              <div className="my-2 ml-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </div>
              <Link
                to="/learnings/intermediate"
                className="flex justify-between w-full p-4 bg-white border cursor-pointer text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white"
              >
                <span>View Courses</span>
                <IconArrowRight />
              </Link>
            </div>
          </div>
        </div>
        {/* third card */}
        <div className="mt-5 mr-5">
          <div className="flex border w-sm">
            <div className="flex flex-col p-4">
              <div className="flex">
                <div className="my-2 text-xl font-semibold">Advanced Level</div>
                <div className="pr-3 ml-auto text-2xl font-semibold cursor-pointer">
                  <IconDots />
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-1 bg-red-600 rounded-full h-min w-min text-md"></div>
                <div className="px-2 text-sm">Difficult</div>
              </div>
              <div className="my-2 ml-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </div>
              <Link
                to="/learnings/advanced"
                className="flex justify-between w-full p-4 bg-white border cursor-pointer text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white"
              >
                <span>View Courses</span>
                <IconArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learnings;
