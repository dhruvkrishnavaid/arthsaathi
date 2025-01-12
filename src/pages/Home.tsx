import HomeGuy from '../assets/images/HomeGuy.png';
import BusinessCard from '../components/BusinessCard';

function Home() {
  return (
    <div className='pt-2 pl-2'>
    <div className='flex'>
    <div>
    <div className="text-xl font-semibold">
      Hey Y'all!
    </div>
    <div>
    Welcome to arthsaathi...
    </div>
    </div>
      <img src={HomeGuy} alt="HomeGuy" className='w-[555px] h-[555px] ml-auto mr-10'/>
    </div>

    <div className='mt-5 text-xl font-semibold'>
    Explore Businesses
    </div>
    <div className='flex'>
    <div>
      <BusinessCard />
    </div>
    <div>
      <BusinessCard />
    </div>
    </div>
    </div>
  );
}

export default Home