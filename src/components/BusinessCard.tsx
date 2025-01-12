import { IconBookmark, IconMapPin } from "@tabler/icons-react"

function BusinessCard() {
  return (
    <div className="flex w-[555px] border-1">
    <div>
    <img src="https://via.placeholder.com/150" alt="business_logo" className="w-[150px] bg-gray-200  h-[237.6px]"/>
    </div>
    <div className="p-4">
      <div className="flex">
    <div className="text-xl font-semibold my-2">
      Business name
    </div>
    <div className="ml-auto pr-3 cursor-pointer">
      <IconBookmark />
    </div>
    </div>
    <div className="ml-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</div>
    <div className="flex">
    <div className="py-3 pr-3 text-sm"><IconMapPin /></div>
    <div className="py-3 text-sm">Location</div>
    </div>
    <div className="flex my2">
    <div className="text-3xl font-semibold">$75</div>
    <div className="ml-auto bg-black text-white p-2 mx-4 px-4 cursor-pointer transition duration-500 ease-in-out hover:bg-white hover:text-black hover:border-1">View Deal</div>
    </div>
    </div>
    </div>
  )
}

export default BusinessCard