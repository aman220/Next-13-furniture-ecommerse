import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Nav = () => {
  return (
    <>
      {/* Header */}
      <div className="font-sans font-medium text-base">
        <div className="flex flex-row justify-around w-screen p-3 bg-white">
          <div>
            <span>Support +91 7037983391</span>
          </div>
          <div>
            <span>
              Signup to <b>GET 20% Off</b> for your first order.
            </span>
            <a className="underline font-semibold text-slate-600 ml-2 hover:cursor-pointer" >
              Signup Now
            </a>
          </div>
          <div className="hover:cursor-pointer">
            <CloseIcon style={{ color: "black" }} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="font-semibold font-sans w-screen p-5 bg-slate-950 text-white">
        <div className="flex flex-row justify-around items-center">
          <div className="text-3xl">Furnitur</div>
          <div className="text-inline">
            <ul className="flex justify-between gap-4 text-lg hover:cursor-pointer">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Shop</li>
              <li>Terminology</li>
              <li>Blog</li>
            </ul>
          </div>

          
          <div className="w-20 justify-between flex">
            <SearchIcon />
            <ShoppingCartIcon />
          </div>

         
          <div className="flex w-max justify-between">
            <button className="btn mr-4">Logout</button>
            <button className="btn bg-green-700 rounded-3xl p-3 hover:bg-green-500 hover:shadow-2xl px-5">Aman Raj Singh</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
