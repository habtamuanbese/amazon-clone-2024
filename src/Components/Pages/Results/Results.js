import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../../Api/endPoint";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${ProductUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data ? res.data : []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}> Results </h1>
        <p style={{ padding: "30px" }}> Category/{categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products__container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                renderAdd={true}
                product={product}
                renderDesc={false}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
