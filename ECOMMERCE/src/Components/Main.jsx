import CardComponent from "./CardComponents"
import products from "../Utility/data"
const Main = () => {
  return (
    <>
    <div>
      <div>
      <img className=" h-fit w-full " src="https://www.shutterstock.com/shutterstock/photos/1364474708/display_1500/stock-vector-creative-vector-illustration-of-big-sale-banner-with-phone-isolated-on-transparent-background-art-1364474708.jpg" alt="" /></div>
      <div>manu bar</div>
    </div>
      <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Products</h1>
        <CardComponent contacts={products} />
      </div>
    </>)
}

export default Main