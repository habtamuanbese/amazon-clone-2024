import React from "react";
import { categoryInfos } from "./categoryFullnfo";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos, i) => (
        <CategoryCard key={i} data={infos} />
      ))}
    </section>
  );
}

export default Category;
