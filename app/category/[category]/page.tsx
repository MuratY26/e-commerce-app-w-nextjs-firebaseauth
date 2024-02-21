"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import "@/components/ProductList/CategoryPage.css";
import Filter from "@/components/ProductList/Filter";
import ProductList from '@/components/ProductList/ProductList';

export default function Page({ params }: { params: { category: string } }) {
  const { category } = params;
  let [filter, setFilter] = useState({});
  let [sort, setSort] = useState(null);

  return (
      <div className="categoryPageContainer">
          <Filter setFilter={setFilter} filter={filter} setSort={setSort} category={category}/>
          <ProductList  filter={filter} sort={sort} category={category} />
      </div>
  );
}



