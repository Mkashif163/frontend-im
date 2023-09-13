import React, { useEffect, useState } from "react";
import { Col, Button } from 'reactstrap'; 
import Link from "next/link";


interface productsProps {
    product: any;
  }
  
  const Product: React.FC<productsProps> = ({ product }) => {

    return (
        <Col xl="3" md="6" sm="6">
            <div className="product">
                    <div className="product-box w-75 h-75 bg-white">
                        <div className="product-imgbox">
                            <div className="product-front justify-content-center align-items-center d-flex"> {/* Add d-flex and justify-content-center classes */}
                                <img src={product.url} className="img-fluid" alt="product" style={{ objectFit: 'fill' }} /> {/* Remove the unnecessary class and add inline styles */}
                            </div>
                            
                        </div>
                        <div className="product-detail detail-center ">
                            <div className="detail-title">
                                <div className="detail-left">
                                    <a href="">
                                        <h6 className="price-title">{product.name.substring(0,20)}</h6>
                                    </a>
                                    <a href="">
                                        <h6 className="price-title"><span className="text-primary">Model:</span> {product.model_no}</h6>
                                    </a>
                                    <div className="rating-star">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    
                                </div>
                                <div className="detail-right">
                                    <div className="check-price">{product.new_price}</div>
                                    <div className="price">
                                        <div className="price">{product.new_sale_price}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-detail">
                                <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                                    <i className="ti-bag"></i>
                                </button>
                                <a href="" title="Add to Wishlist">
                                    <i className="ti-heart" aria-hidden="true"></i>
                                </a>
                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                                    <i className="ti-search" aria-hidden="true"></i>
                                </a>
                                <a href="#" title="Compare">
                                    <i className="fa fa-exchange" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>

        </Col>
    )
}

const AllProducts = () => {
    const [productsData, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://18.234.66.77/api/products')
            .then(response => response.json())
            .then(data => setProducts(data[0]))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <section className="section-big-py-space ratio_asos bg-light">
        <div className="custom-container">
          <div className="row search-product">
            {productsData.map((prodct, i) => (
              <Link href={`/product-details/${prodct.id}`} key={i}>
                <Product product={prodct} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
};

export default AllProducts;
