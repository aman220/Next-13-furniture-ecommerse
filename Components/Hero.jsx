import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import NearMeIcon from '@mui/icons-material/NearMe';
const Hero = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center h-screen ">
        <div className=" w-full md:w-1/2 text-black">
          <div className="flex flex-col p-8 md:p-16">
            <h1 className="text-base md:text-lg mb-6 bg-white rounded-3xl w-max p-3 font-semibold">
              Award Winning Furniture Store
            </h1>
            <p className="text-3xl md:text-5xl font-bold mb-4">
              Make Your Interior Minimalist & Modern
            </p>
            <p className="text-sm md:text-base mb-6">
              Delivering comfort as a priority: Quick and easy access to a wide
              variety of furniture
            </p>
            <div className="flex space-x-4 mb-8">
              <button className="bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition duration-300">
                Get Started
              </button>
              <button className="bg-transparent text-black border border-white py-2 px-4 rounded-full hover:bg-white hover:text-green-700 transition duration-300">
                <PlayArrowIcon /> Watch Video
              </button>
            </div>
            <div className="flex space-x-10 mt-5">
              <div className="text-start">
                <div className="text-4xl  font-bold">1500+</div>
                <div className="text-base">Collections</div>
              </div>
              <div className="text-start">
                <div className="text-4xl font-bold">5000+</div>
                <div className="text-base">Customers</div>
              </div>
              <div className="text-start">
                <div className="text-4xl font-bold">4.8</div>
                <div className="text-base">Review Rating</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto md:w-1/2 h-auto md:h-full flex items-center justify-center">
          <div className="p-2 bg-white rounded-lg w-2/4 h-3/4 flex flex-col shadow-md">
            <div className="mb-4 bg-slate-300 h-4/5 w-full rounded-lg">
              <img
                src="/Interior.jpg"
                alt="Living Room Image"
                className="rounded-lg h-full w-full"
              />
            </div>
            <div className="text-start px-2">
              <div className="text-lg font-bold mb-2 flex justify-between">
                <div>Living Room</div>
                <div className="px-2 py-1 rounded-full bg-slate-300 hover:bg-slate-500 hover:cursor-pointer"><NearMeIcon/></div>
              </div>
              <div className="text-base font-bold text-slate-500">230+ Items</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
