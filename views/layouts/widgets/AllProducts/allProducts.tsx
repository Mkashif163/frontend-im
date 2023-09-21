import React, { useEffect, useState } from "react";
import { Col, Button } from 'reactstrap';
import ProductBox from "../Product-Box/productbox";
import { CartContext } from "helpers/cart/cart.context";
import { WishlistContext } from "helpers/wishlist/wish.context";
import { CompareContext } from "helpers/compare/compare.context";

const PRODUCTS_PER_PAGE = 12; // Number of products to show per page

const AllProducts = () => {
    const [productsData, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true); // Track loading state
    const { addToCart } = React.useContext(CartContext);
    const { addToWish } = React.useContext(WishlistContext);
    const { addToCompare } = React.useContext(CompareContext);

    useEffect(() => {
        fetch('http://18.235.14.45/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data[0]);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setLoading(false); // Set loading to false on error
            });
    }, []);

    const startIndex = 0;
    const endIndex = currentPage * PRODUCTS_PER_PAGE;
    const productsToDisplay = productsData.slice(startIndex, endIndex);

    const loadMoreProducts = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <section className="section-big-py-space ratio_asos bg-light">
            <div className="allproduct-text text-center mx-auto mb-5 ">
                <h2 >Featured Products</h2>
            </div>
            <div className="custom-container">
                {loading ? ( // Render loader while loading is true
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-dark" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="row load-more-product">
                            {productsToDisplay.map((product, i) => (
                                <div className="col-xl-2 col-md-5 col-5" key={i}>
                                    <div className="product w-100">
                                        <div>
                                            <ProductBox
                                                hoverEffect={true}
                                                product={product} // Pass the product data
                                                addCart={(product) => addToCart(product, 1)} // Example: pass the product and quantity
                                                addCompare={(product) => addToCompare(product)}
                                                addWish={(product) => addToWish(product)} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <Button
                                className="btn btn-normal"
                                type="button"
                                onClick={loadMoreProducts}
                            >
                                Load More
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default AllProducts;
