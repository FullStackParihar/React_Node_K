const Header = () => {
    return (
        <div className="bg-purple-700 text-lg font-semibold flex justify-between items-center h-20 px-8 shadow-md">
            <div className="text-white text-4xl font-extrabold tracking-wide cursor-pointer">
                eStore
            </div>


            <div className="sm:hidden flex items-center group relative">
                <button className="text-white text-3xl cursor-pointer">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="absolute left-[700%] top-0 bg-purple-700 w-48 p-4 mt-2 rounded-lg shadow-lg transition-all duration-300 group-hover:left-[-300%] z-50">
                    <ul className="flex flex-col gap-3">
                        {["Home", "Menu", "My Account", "Settings", "About"].map((item) => (
                            <li
                                key={item}
                                className="text-white px-4 py-2 hover:bg-indigo-600 transition-all duration-300 cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>


            </div>


            <nav className="hidden lg:block">
                <ul className="flex gap-5">
                    {["Home", "Menu", "My Account", "Settings", "About"].map((item) => (
                        <li
                            key={item}
                            className="text-white px-4 py-2 hover:scale-110 hover:shadow-lg hover:bg-indigo-600 transition-transform duration-300 cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>


            <div className="flex items-center gap-3 text-white text-2xl cursor-pointer hidden sm:flex">
                <input
                    className="w-[14rem] bg-gray-100 py-1 px-5 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-teal-300"
                    type="text"
                    placeholder="Search..."
                />
            </div>
        </div>
    );
};

export default Header;
