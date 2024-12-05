import React from "react";
import LayOut from "../../LayOut/LayOut";
import Carousel from "../../Carousel/Carousel";
import Category from "../../Category/Category";
import Product from "../../Product/Product";

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
