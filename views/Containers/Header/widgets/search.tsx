import React, { useEffect, useRef, useState } from "react";
import Router from "next/router";
import { NextPage } from "next";
import { Input, InputGroup } from "reactstrap";
import { useRouter } from "next/router";
import Link from "next/link";

function useDebounce(value: any, delay: any) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
const Search: NextPage = () => {
  const router = useRouter();

  const inputEl = useRef(null);
  const [isSearch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [resultItems, setResultItems] = useState(null);
  const [loading, setLoading] = useState(false);
  // const debouncedSearchTerm = useDebounce(keyword, 300);
  // function handleClearKeyword() {
  //   setKeyword('');
  //   setIsSearch(false);
  //   setLoading(false);
  // }

  // function handleSubmit(e: any) {
  //   e.preventDefault();
  //   Router.push(`/search?keyword=${keyword}`);
  // }

  useEffect(() => {
    if (keyword && keyword !== "") {
      setLoading(true);
      if (keyword) {
        const queries = {
          _limit: 5,
          title_contains: keyword,
        };
        fetch(`http://18.235.14.45/api/search/product/${queries}`)
          .then((response) => response.json())
          .then((result) => {
            setResultItems(result.data);
            console.log(result.data);
            setLoading(true);
            setIsSearch(true);
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
            setLoading(true);
          });
      } else {
        setIsSearch(false);
        setKeyword("");
      }
      if (loading) {
        setIsSearch(false);
      }
    } else {
      setLoading(false);
      setIsSearch(false);
    }
  }, [keyword]);

  // Views
  let productItemsView: JSX.Element | null;
  let clearTextView: JSX.Element | null;
  let loadingView: JSX.Element | null;
  let loadMoreView: JSX.Element | null;

  if (loading) {
    if (resultItems && resultItems.length > 0) {
      if (resultItems.length > 5) {
        loadMoreView = (
          <div className='ps-panel__footer text-center'>
            <Link href='/search'>
              <a>See all results</a>
            </Link>
          </div>
        );
      }
      productItemsView = resultItems.map((product: any, index: any) => (
        // <ProductSearchResult product={product} key={product.id} />
        <div className=''>
          <div className='p'>item {index}</div>
        </div>
      ));
    } else {
      productItemsView = <p>No product found.</p>;
    }
    if (keyword !== "") {
      clearTextView = (
        <span className='ps-form__action'>
          <i className='icon icon-cross2'></i>
        </span>
      );
    }
  } else {
    loadingView = (
      <span className='ps-form__action'>{/* <Spin size="small" /> */}</span>
    );
  }
  type Product = {
    id: number;
    name: string;
    oldPrice: number;
    newPrice: number;
    imageUrl: string;
  };
  const products: Product[] = [
    {
      id: 1,
      name: "Multimeter Digital Meters",
      oldPrice: 45,
      newPrice: 19.99,
      imageUrl: "https://placekitten.com/100/100", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Autonics Digital Multi Panel Meter",
      oldPrice: 456,
      newPrice: 299,
      imageUrl: "https://placekitten.com/100/101",
    },
    // Add more products as needed
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className='input-block '>
      <div className='input-box'>
        <div className='ps-form__input d-flex'>
          <input
            className='form-control'
            ref={inputEl}
            type='text'
            value={searchTerm}
            placeholder="I'm shopping for..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className='btn rounded-3 border-1'
            onClick={(e) => {
              setSearchTerm("");
            }}>
            Clear
          </button>
        </div>

        {/* Product List */}
        {searchTerm ? (
          filteredProducts.length > 0 ? (
            <ul
              className='ps-form__input d-flex rounded-3 form-control'
              style={{
                listStyle: "none",
                padding: 0,
                marginTop: "100px",
                backgroundColor: "#E4EBF1", // Use 'lightgray' instead of 'light'
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: "50px",
                zIndex: 999,
                width: "calc(100% - 58%)", // Adjust the width as needed
                boxSizing: "border-box", // Include padding and border in the total width
              }}>
              {filteredProducts.slice(0, 10).map((product) => (
                <li
                  key={product.id}
                  style={{
                    border: "1px solid #ddd",
                    padding: "5px",
                    margin: "10px",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <div>{product.name}</div>
                    <div>
                      <span
                        style={{
                          textDecoration: "line-through",
                          marginRight: "5px",
                        }}>
                        ${product.oldPrice.toFixed(2)}
                      </span>
                      <span>${product.newPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No product found.</p>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
