import React, { useState, useEffect } from "react";

const MyPlugin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const jsonData = await response.json();
                setData(jsonData.slice(0, 10));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div id="webcrumbs">
            <div className="w-[100%] h-[100%] bg-black shadow-lg rounded-lg p-8 ">
                <h1 className="font-title text-3xl text-neutral-50 mb-8 flex justify-center hover:translate-x-2 hover:duration-300">Customer Reviews</h1>
                <div className="grid grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <div key={item.userId} className="bg-neutral-800 p-4 rounded-md hover:translate-x-3  ">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={`https://tools-api.webcrumbs.org/image-placeholder/50/50/avatars/${index + 1}`}
                                    alt={`Customer avatar ${index + 1}`}
                                    className="w-[50px] h-[50px] rounded-full object-contain"
                                />
                                <div>
                                    <h2 className="text-lg text-neutral-50 font-semibold">
                                        {item.title.split(" ").slice(0, 2).join(" ")}
                                    </h2>
                                    <p className="text-sm text-neutral-400">Verified Buyer</p>
                                </div>
                            </div>
                            <p className="text-neutral-50">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyPlugin;
