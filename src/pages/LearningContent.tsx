import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import Item from "../components/Item";
import { postUrl } from "../utils/fetchUrl";
import { useUserStore } from "../utils/user";

const LearningContent = () => {
  const { level } = useParams();
  const store = useUserStore();
  const user = store.user;
  const { data, error, isLoading } = useQuery({
    queryKey: ["learnings", level],
    queryFn: async () =>
      await postUrl(
        {
          email: user?.email,
          level: level,
          profession: user?.profession,
          financialGoals: user?.financialGoals,
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
          {data.map(
            (course: { title: "string"; content: "string" }, id: number) => (
              <div key={id} className="flex flex-col gap-2">
               <Item title={course.title}>{course.content}</Item>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default LearningContent;
