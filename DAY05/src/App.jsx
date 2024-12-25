import React from "react";
import productdata from "./utility/data";
 
const App = () => {
 
  let pr = productdata.map((product) => {
    let reviews = product.productReviews;
    let productReviews = reviews.map((review) => review.productReview);
    return { productName: product.productName, productReviews };
  });

  console.log(pr);  

  return (
    <>
      {pr.map((product, x) => (
        <div className=" bg-cyan-400 " key={x}>
          <h3 className=" bg-blue-500 w-full ">Product Name: {product.productName}</h3>
          <ul className="bg-gradient-to-r from-amber-500 to-pink-500">
            {product.productReviews.map((review, y) => (
              <li key={y}>{review}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default App;
