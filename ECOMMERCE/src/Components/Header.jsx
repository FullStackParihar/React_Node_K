const Header = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-teal-400 text-lg font-semibold flex justify-between items-center h-20 px-8 shadow-lg">

      <div className="text-white text-4xl font-extrabold tracking-wide cursor-pointer">
        <img src=" " alt="" />
        @logo
      </div>

      <nav>
        <ul className="flex gap-5">
          <li className=" text-white px-4 py-2 hover:scale-105 hover:shadow-2xl hover:bg-purple-700 hover:text-white transition-all duration-300 cursor-pointer ">
            Home
          </li>
          <li className=" text-white px-4 py-2 hover:scale-105 hover:shadow-2xl hover:bg-purple-700 hover:text-white transition-all duration-300 cursor-pointer ">
            Menu
          </li>
          <li className=" text-white px-5 py-2 hover:scale-105 hover:shadow-2xl hover:bg-purple-700 hover:text-white transition-all duration-300 cursor-pointer ">
            My Account
          </li>
          <li className=" text-white px-4 py-2 hover:scale-105 hover:shadow-2xl hover:bg-purple-700 hover:text-white transition-all duration-300 cursor-pointer ">
            Settings
          </li>
          <li className=" text-white px-4 py-2 hover:scale-105 hover:shadow-2xl hover:bg-purple-700 hover:text-white transition-all duration-300 cursor-pointer ">
            About
          </li>
        </ul>
      </nav>


      <div className="flex items-center gap-3 text-white text-2xl cursor-pointer">
        <span className="px-10 flex justify-start gap-2 material-icons bg-teal-500 p-2 rounded-full shadow-md hover:bg-teal-700 transition-all duration-300">
         <img className="h-7" src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" />
           <input className=" w-[12rem] bg-transparent text-black" type="text" placeholder="Search..." />  
        </span>

      </div>
    </div>
  );
};

export default Header;
