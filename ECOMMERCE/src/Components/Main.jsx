import CardComponent from "./CardComponents"
import products from "../Utility/data"
import Header from './Header';
import Slider from "./Slider";
const Main = () => {
  return (
    <>
      <div>
        <div>
          <ul className="flex justify-center items-center font-serif gap-4 h-12">
            <li className="text-[1rem]">Headphone</li>
            <li className="text-[1.4rem]">Mobile</li>
            <li className="text-[1.7rem]">Laptop</li>
            <li className="text-[2rem]">Home</li>
            <li className="text-[1.7rem]">Camera</li>
            <li className="text-[1.4rem]">Assesories</li>
            <li className="text-[1rem]">Watch</li>
          </ul>
        </div>
        <div>
        <Slider/>
        </div>
      </div>
      <div className="flex flex-wrap justify-between px-18 items-center bg-gray-100 p-4 ">
        <a href="post" className="text-xl text-blue-600 hover:text-blue-400 hover:animate-pulse font-serif mb-0">Electronic Products</a>
        <a href="post" className="text-xl text-blue-600 hover:text-blue-400 hover:animate-pulse font-serif mb-0">View More....</a>
      </div>
      <hr className="mb-8"></hr>
      <div>
        <CardComponent contacts={products} />
      </div>
    </>)
}

export default Main