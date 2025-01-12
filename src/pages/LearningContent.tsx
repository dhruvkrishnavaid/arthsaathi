import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import TextToSpeech from "../components/TTS";
import { postUrl } from "../utils/fetchUrl";
import { useUserStore } from "../utils/user";

const LearningContent = () => {
  const { level, index } = useParams();
  const store = useUserStore();
  const { data, error, isLoading } = useQuery<
    {
      title: "string";
      content: "string";
    }[]
  >({
    queryKey: ["learnings", level],
    queryFn: async () =>
      await postUrl(
        {
          email: store.user?.email,
          level: level,
          profession: store.user?.profession,
          financialGoals: store.user?.financialGoals,
          language: "english",
        },
        "/generateTutorial",
      ),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {`${error}`}</div>;
  if (data && (data.length ?? 0 > parseInt(index!))) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">
          {data[parseInt(index!)].title}
        </h1>
        <TextToSpeech className="flex flex-col gap-4">
          {data[parseInt(index!)].content}
          </TextToSpeech>
      </div>
    );
  } else {
    return <div>Content not found</div>;
  }
};

export default LearningContent;
