import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
const ExploreNow = () => {
  return (
    <div className="justify-center text-center items-center">
      <div className="w-screen h-auto bg-white justify-center text-center">
        <div className="bg-green-700 w-max px-2  mb-7 left-0 right-0 mx-auto rounded-b-2xl rounded-t[-10px] shadow-2xl shadow-green-500 hover:cursor-pointer hover:bg-green-500">
          <h2 className="p-3 text-white">Explore Now</h2>
        </div>
        <div class="justify-center items-center">
          <div className="flex flex-wrap flex-row justify-center items-center">
            <div class="p-6 w-1/2">
              <h2 className="text-lg text-left ml-2 font-mono text-slate-600">
                Discover the Benefits
              </h2>
              <p className="text-xl md:text-3xl font-bold mb-4 max-w-lg mt-2">
                Find out what makes us the perfect choice for you.
              </p>
            </div>
            <div className=" p-6 ml-4 max-w-xl font-sans text-slate-700">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, quam voluptatibus esse doloribus blanditiis repellat
                nihil aliquam ratione explicabo?
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-between p-10 m-5">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 p-4 hover:cursor-pointer hover:bg-slate-300">
              <div className="p-5">
                <PaymentIcon />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">Eaisy Payment</h2>
                <p className="text-gray-700 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, quos quidem! Quisquam corporis impedit incidunt
                  laboriosam, possimus perferendis dicta sit.
                </p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 p-4 hover:cursor-pointer hover:bg-slate-300">
              <div className="p-5">
                <LocalShippingIcon />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">Free Divelery</h2>
                <p className="text-gray-700 text-start">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  rem, placeat quia at quo aperiam itaque veritatis error
                  quibusdam illo!
                </p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 p-4 hover:cursor-pointer hover:bg-slate-300">
              <div className="p-5">
                <DeliveryDiningIcon />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">Easy Return</h2>
                <p className="text-gray-700 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam ea ab libero, magnam eveniet animi officiis.
                  Provident nisi voluptas porro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreNow;
