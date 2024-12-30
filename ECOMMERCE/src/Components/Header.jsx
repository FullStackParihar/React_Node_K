const Header = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-teal-400 text-lg font-semibold flex justify-between items-center h-20 px-8 shadow-lg">

      <div className="text-white text-4xl font-extrabold tracking-wide cursor-pointer">
        Logo
      </div>

      <nav>
        <ul className="flex gap-6">
          <li className="bg-white text-purple-500 px-4 py-2 rounded-full shadow-md hover:bg-purple-700 hover:text-white transition-all duration-300 cursor-pointer">
            Home
          </li>
          <li className="bg-white text-purple-500 px-4 py-2 rounded-full shadow-md hover:bg-purple-700 hover:text-white transition-all duration-300 cursor-pointer">
            Menu
          </li>
          <li className="bg-white text-purple-500 px-4 py-2 rounded-full shadow-md hover:bg-purple-700 hover:text-white transition-all duration-300 cursor-pointer">
            My Account
          </li>
          <li className="bg-white text-purple-500 px-4 py-2 rounded-full shadow-md hover:bg-purple-700 hover:text-white transition-all duration-300 cursor-pointer">
            Settings
          </li>
          <li className="bg-white text-purple-500 px-4 py-2 rounded-full shadow-md hover:bg-purple-700 hover:text-white transition-all duration-300 cursor-pointer">
            About
          </li>
        </ul>
      </nav>


      <div className="flex items-center gap-3 text-white text-2xl cursor-pointer">
        <span className="material-icons bg-teal-500 p-2 rounded-full shadow-md hover:bg-teal-700 transition-all duration-300">
          search
        </span>

      </div>
    </div>
  );
};

export default Header;