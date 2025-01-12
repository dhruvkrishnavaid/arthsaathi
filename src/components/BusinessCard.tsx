import { IconBookmark, IconMapPin } from "@tabler/icons-react";

const BusinessCard = () => {
  return (
    <div className="flex border w-xl">
      <img
        src="https://random.imagecdn.app/250/250"
        alt="business_logo"
        className="w-full h-full bg-gray-200"
      />
      <div className="p-4">
        <div className="flex items-center">
          <div className="my-2 text-xl font-semibold">Business name</div>
          <div className="pr-3 ml-auto cursor-pointer">
            <IconBookmark />
          </div>
        </div>
        <div className="ml-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </div>
        <div className="flex items-center">
          <div className="py-3 pr-3 text-sm">
            <IconMapPin />
          </div>
          <div className="py-3 text-sm">Location</div>
        </div>
        <div className="flex my2">
          <div className="text-3xl font-semibold">$75</div>
          <div className="p-2 px-4 mx-4 ml-auto text-white border cursor-pointer bg-neutral-900 transition duration-500 ease-in-out hover:bg-white hover:text-neutral-900">
            View Deal
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
