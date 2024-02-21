"use client"
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import products from "../../products.json";
const SearchContainer = styled.div`
  position: relative;
  color: white;
`;

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  color: black;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
`;

const SearchResultItem = styled.div`
  h3 {
    font-size: 14px; // yazı boyutu için
    margin: 0; // ekledik
    cursor: pointer; // ekledik
  }

  p {
    font-size: 12px;
    margin: 0; // ekledik
  }
`;

function ProductSearch() {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const navigate = () => {}

    useEffect(() => {
        if (searchText.length >= 2) {
            const filteredResults = products.filter((product) =>
                product.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearchResults(filteredResults);
            setShowResults(true);
        } else {
            setSearchResults([]);
            setShowResults(false);
        }
    }, [searchText]);

    const handleClickOutside = () => {
        setShowResults(false);
    };

    const handleProductClick = (productId) => {
        navigate(`/product/:${productId}`);
        handleClickOutside()
        setSearchText("");
    };

    return (
        <SearchContainer>
            <input
                type="text"
                placeholder="Search Products..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            {showResults && (
                <SearchResults>
                    {searchResults.length === 0 ? (
                        <div>No results found</div>
                    ) : (
                        searchResults.map((product) => (
                            <SearchResultItem
                                key={product.id}
                                onClick={() => handleProductClick(product.id)}
                            >
                                <h3>{product.title}</h3>
                                <p>Price: ${product.price}</p>
                            </SearchResultItem>
                        ))
                    )}
                </SearchResults>
            )}
        </SearchContainer>
    );
}

export default ProductSearch;
