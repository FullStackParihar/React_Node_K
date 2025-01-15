import React from "react";
import TileList from "../utility/Tiles";

const Tiles = () => {
    return (
        <div className="flex flex-wrap gap-4 justify-start ">
            {TileList.map((item) => (
                <div

                    className="bg-white border border-gray-400 rounded-lg w-full p-3 flex justify-start items-center gap-4">
                 {/* icon */}
                    <div>  <img
                        src={item.icon}
                        className="w-12 object-cover rounded-lg "
                    />
                    </div>
                    {/* description */}
                    <div>
                        <p className="text-gray-600 overflow-hidden">{item.description}</p>
                        <h3 className="text-sm font-semibold text-gray-600 mt-2">
                            {item.date}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tiles;
