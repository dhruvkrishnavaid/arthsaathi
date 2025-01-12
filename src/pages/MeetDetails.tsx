import { IconMicrophoneFilled, IconMicrophoneOff } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { postUrl } from "../utils/fetchUrl";
import { Meeting } from "../utils/interfaces";

const MeetDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery<Meeting>({
    queryKey: ["meeting", id],
    queryFn: async () => await postUrl({ _id: id }, "/getMeeting"),
  });

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleSubmit = async () => {
    if (transcript.length > 0) {
      await postUrl(
        {
          _id: id,
          content: transcript,
          language: "english",
        },
        "/getSummary",
      );
      navigate(0);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  if (!data) {
    return (
      <p>
        No data found for the specified meeting! Please cross check the meeting
        ID.
      </p>
    );
  }
  if (data.content?.length ?? 0 > 0) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="py-4 text-4xl font-bold">{data.description}</h1>
        <h2 className="text-2xl font-semibold">Participants:</h2>
        <p>
          {data.participants?.length ?? 0 > 0
            ? data.participants?.join(", ")
            : "No participants recorded"}
        </p>
        <h2 className="text-2xl font-semibold">Notes:</h2>
        <p>{data.notes?.length ?? 0 > 0 ? data.notes : "No notes found"}</p>
        <h2 className="text-2xl font-semibold">Date:</h2>
        <p>
          {new Date(data.date!).toLocaleDateString()} |{" "}
          {new Date(data.date!).toLocaleTimeString()}
        </p>
        <h2 className="text-2xl font-semibold">Summary:</h2>
        <div>
          {data.summary?.length ?? 0 > 0 ? (
            data.summary
          ) : (
            <div className="flex flex-col w-full h-full p-6 border bg-neutral-100 gap-4">
              <h2 className="text-2xl font-semibold">No Summary Recorded</h2>
              <p>
                The meeting was not recorded. Please check back later for
                updates.
              </p>
            </div>
          )}
        </div>
        <h2 className="text-2xl font-semibold">Transcript:</h2>
        <div>{data.content}</div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="py-4 text-4xl font-bold">{data.description}</h1>
        <h2 className="text-2xl font-semibold">Participants:</h2>
        <p>
          {data.participants?.length ?? 0 > 0
            ? data.participants?.join(", ")
            : "No participants recorded"}
        </p>
        <h2 className="text-2xl font-semibold">Meeting Notes:</h2>
        <p>{data.notes?.length ?? 0 > 0 ? data.notes : "No notes found"}</p>
        <h2 className="text-2xl font-semibold">Date:</h2>
        <p>
          {new Date(data.date!).toLocaleDateString()} |{" "}
          {new Date(data.date!).toLocaleTimeString()}
        </p>
        <div className="flex flex-col items-center justify-center w-full h-full p-6 border gap-12">
          <div className="flex items-center justify-between w-1/2 gap-4 min-w-min">
            <div className="font-bold">
              {transcript.length ?? 0 > 0
                ? listening
                  ? "Listening..."
                  : "Listening paused"
                : "Unmute to start recording"}
            </div>
            <button
              onClick={
                listening
                  ? () => SpeechRecognition.stopListening()
                  : () => SpeechRecognition.startListening({ continuous: true })
              }
              className="p-6 text-white border rounded-full cursor-pointer  bg-neutral-900 hover:bg-white hover:text-neutral-900 transition-colors duration-300"
            >
              {listening ? (
                <IconMicrophoneFilled size={28} />
              ) : (
                <IconMicrophoneOff size={28} />
              )}
            </button>
          </div>
          <div className="flex flex-col items-center w-full justify-evenly gap-4 min-w-min">
            <button
              onClick={() => {
                SpeechRecognition.abortListening();
                resetTranscript();
              }}
              className="container py-4 text-white bg-red-900 border cursor-pointer hover:bg-red-50 hover:text-red-900 transition-colors duration-300"
            >
              Discard Recording
            </button>
            <button
              onClick={handleSubmit}
              className="container py-4 text-white border cursor-pointer bg-neutral-900 hover:bg-white hover:text-neutral-900 transition-colors duration-300"
            >
              Save Recording
            </button>
          </div>
        </div>
        <div className="text-neutral-600">
          {transcript.length ?? 0 > 0
            ? `"${transcript}"`
            : "Your recording will be displayed here..."}
        </div>
      </div>
    );
  }
};

export default MeetDetails;
