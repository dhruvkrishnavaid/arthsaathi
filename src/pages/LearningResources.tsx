import { IconArrowRight } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { postUrl } from "../utils/fetchUrl";
import { useUserStore } from "../utils/user";

const LearningResources = () => {
  const { level } = useParams();
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
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">{level?.toUpperCase()} COURSES</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {`${error}`}</div>}
      {!isLoading && !error && data && (
        <div className="flex flex-col gap-4">
          {data.map((course, id: number) => (
            <div key={id} className="flex flex-col gap-2">
              <Link
                to={`/learnings/${level}/${id}`}
                className="flex items-center justify-between px-6 py-4 border cursor-pointer hover:bg-neutral-900 border-neutral-900 hover:text-white transition-colors duration-300"
              >
                <span>{course.title}</span>
                <IconArrowRight className="w-6 h-6" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LearningResources;
