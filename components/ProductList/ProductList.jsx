import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import products from "@/public/products.json";

export default function ProductList(props) {
  const [categoryProducts, setCategoryProducts] = useState([]);
  let { category } = props;
  useEffect(() => {
    setCategoryProducts(products.filter((product) => product.category == category))
  },
  []);
  
  const [filteredProducts, setFilteredProducts] = useState(categoryProducts);

  useEffect(() => {
    if (Object.keys(props.filter).length) {
      let filters = Object.keys(props.filter);
      let ranges = filters.map((range) => range.split("-"));
      setFilteredProducts(
        categoryProducts.filter((item) =>
          ranges.some(
            (range) => item.price >= range[0] && item.price <= range[1]
          )
        )
      );
    } else {
      setFilteredProducts(categoryProducts);
    }

    if (props.sort) {
      if (props.sort === "increasing") {
        setFilteredProducts((filteredProducts) =>
          filteredProducts.slice().sort((a, b) => a.price - b.price)
        );
      }
      if (props.sort === "decreasing") {
        setFilteredProducts((filteredProducts) =>
          filteredProducts.slice().sort((a, b) => b.price - a.price)
        );
      }
    }
  }, [categoryProducts, props.filter, props.sort]);

  return (
    <div className="listContainer">
      {filteredProducts.map((product) => (
        <ItemCard product={product} key={product.id} />
      ))}
    </div>
  );
}

