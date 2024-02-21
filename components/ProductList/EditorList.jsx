
import "./CategoryPage.css";
import ItemCard from "./ItemCard";
import { useState, useEffect } from 'react';
export default function EditorList() {
    const [editorProds, setEditorProds] = useState([]);

    useEffect(() => {
  
      fetch("/products.json").then((response) => response.json()).then((data) =>{
        let randNumber = (Math.floor(Math.random() * (data.length-4)));
        let randomProds = data.slice(randNumber,randNumber+4);
        setEditorProds(randomProds);
      });
    },
    []);
    return (
        <>
        <div className="text-center my-auto mx-0 font-bold text-red-700 text-3xl underline">Editor's Choice</div>
        <div className="listContainer">
        {editorProds.length != 0 ? editorProds.map((product) => (
            <ItemCard product={product} key={product.id } />
            )) : ""}
       </div>
        </>
    )
}