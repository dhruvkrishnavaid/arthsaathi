import { useState } from "react";
import { Meeting } from "../utils/interfaces";
import { postUrl } from "../utils/fetchUrl";
import { useNavigate } from "react-router";
import { useUserStore } from "../utils/user";

const CreateMeet = () => {
  const store = useUserStore();
  const [meet, setMeet] = useState<Meeting>({
    email: store.user?.email || "",
    participants: [],
    description: "",
    content: "",
    date: new Date(),
    notes: "",
  });
  const navigate = useNavigate();

  const handleAgendaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeet({
      ...meet,
      description: e.target.value,
    });
  };

  const handleDateChange = (date: Date) => {
    setMeet({
      ...meet,
      date: date,
    });
  };

  function handleParticipantsChange(
    e: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setMeet({
      ...meet,
      participants: e.target.value.split(","),
    });
  }

  function handleNotesChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setMeet({
      ...meet,
      notes: e.target.value,
    });
  }

  const handleSubmit = async () => {
    try {
    const res = await postUrl(meet, "/createMeeting");
    console.log(res);
    navigate(`/meetings/${res.id}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("Failed to create meeting!");
        console.error(error);
      } else {
        alert("Failed to create meet!");
      }
    }
  };

  function handelCancel(): void {
    navigate("/meetings");
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Create a new meeting</h1>
      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="">Participants</label>
          <input
            type="text"
            name="participants"
            placeholder="p1@mail.com,p2@mail.com"
            value={meet.participants?.join(",")}
            className="w-full outline-0 flex px-2 py-3 border"
            onChange={handleParticipantsChange}
          />
        </div>
        <div>
          <label>Meeting Agenda</label>
          <input
            type="text"
            name="title"
            placeholder="Meeting Agenda"
            value={meet.description}
            className="w-full outline-0 flex px-2 py-3 border"
            onChange={handleAgendaChange}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="content"
            placeholder="Meeting Description"
            value={meet.notes}
            className="w-full outline-0 flex px-2 py-3 border"
            onInput={handleNotesChange}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={new Date(meet.date!).toISOString().split("T")[0]}
            className="w-full outline-0 flex px-2 py-3 border"
            onChange={(e) => handleDateChange(new Date(e.target.value))}
          />
        </div>
        <div className="flex gap-4">
          <button
            type="reset"
            onClick={handelCancel}
            className="px-6 py-4 bg-white border cursor-pointer transition-colors duration-300 hover:bg-neutral-900 border-neutral-900 hover:text-white text-neutral-900"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-4 text-white border cursor-pointer transition-colors duration-300 bg-neutral-900 border-neutral-900 hover:text-neutral-900 hover:bg-white"
          >
            Create Meet
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMeet;
