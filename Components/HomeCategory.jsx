const HomeCategory = () => {
  return (
    <div className="w-screen h-screen ">
      <div className="flex flex-col justify-center items-center font-sans mt-5">
        <span className="text-slate-400 text-base">Category</span>
        <span className="text-3xl font-bold mt-2 text-center">
          Discover our Unique Collection of Exclusive Categories
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4  p-20 h-screen">
        <div className="relative bg-red-400 h-full flex items-center justify-center object-cover rounded-lg">
          <img
            className="h-full w-full rounded-lg"
            src="/bedroom.jpg"
            alt="Bedroom"
          ></img>
          <span className="absolute left-0 bottom-0 m-5 text-2xl font-bold text-white z-10">Office</span>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-400 to-transparent rounded-lg"></div>
        </div>

        <div className="relative bg-yellow-400 h-full flex items-center justify-center object-cover rounded-lg">
          <img className="h-full w-full rounded-lg" src="/sofa.jpg"></img>
          <span className="absolute left-0 bottom-0 m-5 text-2xl font-bold text-white z-10">BedRoom</span>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-400 to-transparent rounded-lg"></div>
        </div>
        <div className="relative col-span-2 bg-green-400 flex items-center justify-center h-full object-cover rounded-lg">
          <img
            className="h-full w-full rounded-lg "
            src="/lumbiimage.jpg"
          ></img>
          <span className="absolute left-0 bottom-0 m-5 text-2xl font-bold text-white z-10">Living Room</span>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-400 to-transparent rounded-lg"></div>
        </div>
        <div className=" relative col-start-3 row-end-1 row-span-2 bg-blue-400 h-full  items-center justify-center object-cover rounded-lg">
          <div className="h-full rounded-lg">
            <img
              className="h-full w-full rounded-lg border-l-zinc-700"
              src="/kitchen.jpg"
            ></img>
            <span className="absolute left-0 bottom-0 m-5 text-2xl font-bold text-white z-10">Kitchen</span>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-400 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
