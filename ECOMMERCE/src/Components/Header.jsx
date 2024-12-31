const Header = () => {
    return (
        <div className="bg-purple-700 text-lg font-semibold flex justify-between items-center h-20 px-8 shadow-md">
            <div className="text-white text-4xl font-extrabold tracking-wide cursor-pointer">
                @eStore
            </div>

            <nav>
                <ul className="flex gap-5">
                    {["Home", "Menu", "My Account", "Settings", "About"].map(
                        (item) => (
                            <li
                                key={item}
                                className="text-white px-4 py-2 hover:scale-110 hover:shadow-lg hover:bg-indigo-600 transition-transform duration-300 cursor-pointer"
                            >
                                {item}
                            </li>
                        )
                    )}
                </ul>
            </nav>

            <div className="flex items-center gap-3 text-white text-2xl cursor-pointer">
                <input
                    className="w-[12rem] bg-gray-100 p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-teal-300"
                    type="text"
                    placeholder="Search..."
                />
            </div>
        </div>
    );
};

export default Header;
