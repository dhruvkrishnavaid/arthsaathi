import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

const Item = (props: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        className="flex items-center justify-between w-full p-4 cursor-pointer focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{props.title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <IconChevronDown
            className={`w-3 text-neutral-600 transition-transform duration-300 ${
              isOpen && "transform rotate-180"
            }`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-neutral-700">{props.children}</p>
        </div>
      )}
    </div>
  );
};

export default Item;
