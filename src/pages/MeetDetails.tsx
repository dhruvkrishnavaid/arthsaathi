import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { postUrl } from "../utils/fetchUrl";
import { Meeting } from "../utils/interfaces";

const MeetDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useQuery<Meeting>({
    queryKey: ["meeting", id],
    queryFn: async () => await postUrl({ _id: id }, "/getMeeting"),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return (
      <p>
        No data found for the specified meeting! Please cross check the meeting
        ID.
      </p>
    );
  }

  return (
    <div>
      <h1>{data.description}</h1>
      <p>
        {new Date(data.date!).toLocaleDateString()} | {new Date(data.date!).toLocaleTimeString()}
      </p>
      <p>{`${data}`}</p>
    </div>
  );
};

export default MeetDetails;
