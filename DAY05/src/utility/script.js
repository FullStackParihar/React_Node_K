import productdata from "./data.js";
console.log(productdata);
let pr = productdata.map((product) => {
   let reviews = product.productReviews;
   let productReviews = reviews.map((reviews)=> reviews.productReview)
    return{productName:product.productName, productReviews};}
);
console.log(pr)