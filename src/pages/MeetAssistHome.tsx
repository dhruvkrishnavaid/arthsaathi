import { IconArrowRight } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { postUrl } from "../utils/fetchUrl";
import { Meeting } from "../utils/interfaces";
import { useUserStore } from "../utils/user";

const MeetAssistHome = () => {
  const store = useUserStore();
  const { data, error, isLoading } = useQuery<Meeting[]>({
    queryKey: ["meetings"],
    queryFn: async () =>
      await postUrl({ email: store.user?.email }, "/getMeetings"),
  });
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col p-4 border lg:flex-row gap-4 border-neutral-900">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Meeting Assistant</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            voluptatum ab incidunt quas sed cumque quidem corporis ducimus earum
            perferendis!
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-4 text-center bg-white border cursor-pointer border-neutral-900 h-min w-min transition-colors duration-300 hover:bg-neutral-900 hover:text-white text-neutral-900">
            Delete Meeting
          </button>
          <Link
            to="/meetings/create"
            className="px-6 py-4 text-center text-white border cursor-pointer border-neutral-900 h-min w-min transition-colors duration-300 bg-neutral-900 hover:bg-white hover:text-neutral-900"
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
          data.filter(
            (meeting: Meeting) =>
              meeting.date && new Date(meeting.date) >= new Date(),
          ).length > 0 ? (
            data
              .filter(
                (meeting: Meeting) =>
                  meeting.date && new Date(meeting.date) >= new Date(),
              )
              .map((meeting: Meeting) => (
                <div
                  key={meeting._id}
                  className="flex flex-col justify-between p-4 border w-xs gap-4"
                >
                  <div>
                    <div className="text-2xl font-semibold">
                      {meeting.description}
                    </div>
                    <div>
                      {new Date(meeting.date!).toLocaleDateString()} |{" "}
                      {new Date(meeting.date!).toLocaleTimeString()}
                    </div>
                  </div>
                  <hr className="mt-auto" />
                  <div className="flex">
                    <Link
                      to={`/meetings/${meeting._id}`}
                      className="flex justify-between w-full px-6 py-4 bg-white border cursor-pointer h-min transition-colors duration-300 hover:bg-neutral-900 hover:text-white text-neutral-900"
                    >
                      <span>View Details</span>
                      <IconArrowRight />
                    </Link>
                  </div>
                </div>
              ))
          ) : (
            <div>No upcoming meetings found</div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Previous Meetings</h2>
        <div className="overflow-x-auto grid grid-flow-col gap-4">
          {!isLoading &&
          !error &&
          data &&
          data.filter(
            (meeting: Meeting) =>
              meeting.date && new Date(meeting.date) < new Date(),
          ).length > 0 ? (
            data
              .filter(
                (meeting: Meeting) =>
                  meeting.date && new Date(meeting.date) < new Date(),
              )
              .map((meeting: Meeting) => (
                <div
                  key={meeting._id}
                  className="flex flex-col justify-between p-4 border w-xs gap-4"
                >
                  <div>
                    <div className="text-2xl font-semibold">
                      {meeting.description}
                    </div>
                    <div>
                      {new Date(meeting.date!).toLocaleDateString()} |{" "}
                      {new Date(meeting.date!).toLocaleTimeString()}
                    </div>
                  </div>
                  <hr className="mt-auto" />
                  <div className="flex">
                    <Link
                      to={`/meetings/${meeting._id}`}
                      className="flex justify-between w-full px-6 py-4 bg-white border cursor-pointer h-min transition-colors duration-300 hover:bg-neutral-900 hover:text-white text-neutral-900"
                    >
                      <span>View Details</span>
                      <IconArrowRight />
                    </Link>
                  </div>
                </div>
              ))
          ) : (
            <div>No previous meetings found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetAssistHome;
