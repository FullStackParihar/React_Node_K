import CardComponent from "./CardComponents"
import products from "../Utility/data"
const Main = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Products</h1>
        <CardComponent contacts={products} />
      </div>
    </>)
}

export default Main