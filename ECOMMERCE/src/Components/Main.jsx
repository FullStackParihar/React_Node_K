import CardComponent from "./CardComponents"
import products from "../Utility/data"
const Main = () => {
  return (
    <>
    <div>
    <div>
      <ul className="flex justify-center items-center gap-3 h-10">
        <li className="text-[1rem]">Abcdef</li>
        <li className="text-[1.4rem]">Abcdef</li>
        <li className="text-[1.7rem]">Abcdef</li>
        <li className="text-[2rem]">Abcdef</li>
        <li className="text-[1.7rem]">Abcdef</li>
        <li className="text-[1.4rem]">Abcdef</li>
        <li className="text-[1rem]">Abcdef</li>
      </ul>
    </div>
      <div>
      <img className=" h-fit w-full " src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/d9290fb51138d286.png?q=20" alt="" /></div>
    </div>
      <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Products</h1>
        <CardComponent contacts={products} />
      </div>
    </>)
}

export default Main