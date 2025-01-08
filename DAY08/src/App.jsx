import React, { useState } from 'react';

const data = () => [
    { id: 1, name: 'iPhone 16', brand: 'Apple', price: 40000, quantity: 0, image: 'https://m.media-amazon.com/images/I/71CSc3M2AGL._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Xiaomi Mi 20000mAh', brand: 'Xiaomi', price: 4000, quantity: 0, image: 'https://m.media-amazon.com/images/I/712c05cF-SL._AC_UY327_FMwebp_QL65_.jpg' },
    { id: 3, name: 'Airpods', brand: 'Apple', price: 15000, quantity: 0, image: 'https://m.media-amazon.com/images/I/61tqEd9sFUL._AC_UY327_FMwebp_QL65_.jpg' }
];

const App = () => {
    const [count, setCount] = useState(Array(data().length).fill(0));

    const increment = (index) => {
        setCount((prevCount) =>
            prevCount.map((item, i) => (i === index ? (item < 5 ? item + 1 : 5) : item))
        );
    };

    const decrement = (index) => {
        setCount((prevCount) =>
            prevCount.map((item, i) => (i === index ? (item > 0 ? item - 1 : 0) : item))
        );
    };

    let totalPrice = 0;
    for (let i = 0; i < count.length; i++) {
        totalPrice += count[i] * data()[i].price;
    }

    return (
        <div className="bg-gray-100 p-4">
            <div className="container w-[800px] mx-auto shadow-xl ">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">
                                {count.reduce((acc, curr) => acc + curr, 0)} Items
                            </h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                                Product Details
                            </h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                                Quantity
                            </h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                                Price
                            </h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                                Total
                            </h3>
                        </div>
                        {data().map((item, index) => (
                            <div
                                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                                key={item.id}
                            >
                                <div className="flex w-2/5">
                                    <div className="w-20">
                                        <img className="h-24" src={item.image} alt={item.name} />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-sm">{item.name}</span>
                                        <span className="text-red-500 text-xs">{item.brand}</span>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/5">
                                    <button className="mb-4" onClick={() => decrement(index)}>
                                        _
                                    </button>
                                    <input
                                        className="mx-2 border text-center w-8"
                                        type="text"
                                        value={count[index]}
                                        readOnly
                                    />
                                    <button className="mb-2" onClick={() => increment(index)}>
                                        +
                                    </button>
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                    RS{item.price}
                                </span>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                    RS{item.price * count[index]}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div id="summary" className="w-1/4 px-8 py-10 bg-indigo-500 ">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">
                                Items {count.reduce((acc, curr) => acc + curr, 0)}
                            </span>
                            <span className="font-semibold text-sm">RS</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">
                                Shipping
                            </label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - 10.00</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label
                                htmlFor="promo"
                                className="font-semibold inline-block mb-3 text-sm uppercase"
                            >
                                Promo Code
                            </label>
                            <input
                                type="text"
                                id="promo"
                                placeholder="Enter your code"
                                className="p-2 text-sm w-full"
                            />
                        </div>
                        <button className="bg-red-700 hover:bg-red-400 px-5 py-2 text-sm text-white uppercase">
                            Apply
                        </button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>RS{totalPrice}</span>
                            </div>
                            <button className="bg-indigo-700 font-semibold hover:bg-indigo-300 py-3 text-sm text-white uppercase w-full">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
