import { useQuery } from "@tanstack/react-query";
import { postUrl } from "../utils/fetchUrl";
import { Meeting } from "../utils/interfaces";
import { useUserStore } from "../utils/user";
import { Link } from "react-router";

const MeetAssistHome = () => {
  const store = useUserStore();
  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => postUrl(store.user, "/getMeetings"),
  });

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex p-4 border border-neutral-900">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Meeting Assistant</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            voluptatum ab incidunt quas sed cumque quidem corporis ducimus earum
            perferendis!
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-4 bg-white border cursor-pointer text-center h-min w-min transition-colors duration-300 hover:bg-neutral-900 hover:text-white text-neutral-900">
            Delete Meeting
          </button>
          <Link
            to="/meetings/create"
            className="px-6 py-4 text-white border cursor-pointer text-center h-min w-min transition-colors duration-300 bg-neutral-900 hover:bg-white hover:text-neutral-900"
          >
            Create Meeting
          </Link>
        </div>
      </div>
      <div className="flex flex-col overflow-x-auto gap-4">
        <h2 className="text-3xl font-bold">Upcoming Meetings</h2>
        <div className="overflow-x-auto grid grid-flow-col gap-4">
          {!isLoading &&
            !error &&
            data &&
            data
              .filter(
                (meeting: Meeting) =>
                  meeting.date && new Date(meeting.date) > new Date(),
              )
              .map((meeting: Meeting) => (
                <div className="p-4 border">
                  <div className="pb-4 border-b min-w-xs">
                    <div className="text-2xl font-semibold">
                      {meeting.description}
                    </div>
                    <div>
                      {meeting.date?.toLocaleDateString()} |{" "}
                      {meeting.date?.toLocaleTimeString()}
                    </div>
                  </div>
                  <div className="flex mt-4 gap-4">
                    <button className="w-full px-6 py-4 bg-white border cursor-pointer h-min transition-colors duration-300 hover:bg-neutral-900 hover:text-white text-neutral-900">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Previous Meetings</h2>
        <div className="grid grid-flow-col gap-4">
          {!isLoading &&
            !error &&
            data &&
            data
              .filter(
                (meeting: Meeting) =>
                  meeting.date && new Date(meeting.date) < new Date(),
              )
              .map((meeting: Meeting) => (
                <div className="p-4 border">
                  <div className="pb-4 border-b min-w-xs">
                    <div className="text-2xl font-semibold">
                      {meeting.description}
                    </div>
                    <div>
                      {meeting.date?.toLocaleDateString()} |{" "}
                      {meeting.date?.toLocaleTimeString()}
                    </div>
                  </div>
                  <div className="flex mt-4 gap-4">
                    <button className="w-full px-6 py-4 bg-white border cursor-pointer h-min transition-colors duration-300 hover:bg-neutral-900 hover:text-white text-neutral-900">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default MeetAssistHome;
