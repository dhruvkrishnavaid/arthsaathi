import { useState } from "react";
import { Meeting } from "../utils/interfaces";
import { postUrl } from "../utils/fetchUrl";
import { useNavigate } from "react-router";

const CreateMeet = () => {
  const [meet, setMeet] = useState<Meeting>({
    description: "",
    date: new Date(),
    content: "",
    participants: [],
    email: "",
    notes: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeet({
      ...meet,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date: Date) => {
    setMeet({
      ...meet,
      date: date,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await postUrl(meet, "/createMeeting");
      navigate(`/meetings/${res.id}`);
    } catch (error) {
      alert(`Failed to create meet ${error}`);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">Create a new meeting</h1>
      <form>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={meet.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={meet.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={meet.date?.toISOString().split("T")[0]}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
          />
        </div>
        <button type="button" onClick={handleSubmit}>Create Meet</button>
      </form>
    </div>
  );
};

export default CreateMeet;