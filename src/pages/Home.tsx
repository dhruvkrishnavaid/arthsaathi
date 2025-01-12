import HomeGuy from "../assets/images/HomeGuy.png";
import BusinessCard from "../components/BusinessCard";
import { useUserStore } from "../utils/user";

function Home() {
  const store = useUserStore();
  return (
    <div className="pt-2 pl-2">
      <div className="flex justify-between">
        <div className="flex flex-col w-1/2 gap-8">
          <div className="font-semibold text-7xl">Hey {store.user?.name}!</div>
          <div className="text-3xl">
            Welcome to
            <span className="pl-2 text-4xl font-pacifico">Arthsaathi</span>...
          </div>
        </div>
        <img src={HomeGuy} alt="HomeGuy" className="w-md" />
      </div>

      <div className="mt-5 text-xl font-semibold">Explore Businesses</div>
      <div className="flex overflow-x-auto">
        <div className="mt-5 mr-5">
          <BusinessCard />
        </div>
        <div className="mt-5">
          <BusinessCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
