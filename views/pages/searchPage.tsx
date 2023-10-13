import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Container, Row, Col } from "reactstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { Skeleton } from "common/skeleton";


interface productsProps {
  product: any;
}

const ProductList: React.FC<productsProps> = ({ product }) => {
  return (
    <Col xl="3" md="4" sm="6">
      <div className="product">
        <div className="product-box bg-white">
          <div className="product-imgbox">
            <div className="product-front justify-content-center align-items-center d-flex"> {/* Add d-flex and justify-content-center classes */}
              <img src={product.url} className="img-fluid" alt="product" style={{ objectFit: 'fill' }} /> {/* Remove the unnecessary class and add inline styles */}
            </div>
            {/* <div className="product-back">
        <img src={product.img2} className="img-fluid" alt="product" />
      </div> */}
          </div>
          <div className="product-detail detail-center ">
            <div className="detail-title">
              <div className="detail-left">
                <div className="rating-star">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <a href="">
                  <h6 className="price-title">{product.name}</h6>
                </a>
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
  );
};
const SearchPage: NextPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get the search query from the URL and update the state
  useEffect(() => {
      // Fetch data based on the search query
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/search/product/${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setLoading(false);
        });
  },[]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(e.currentTarget.searchQuery.value);
    router.push(`/pages/search?${e.currentTarget.searchQuery.value}`);
  };

  return (
    <>
      <section className="authentication-page section-big-pt-space bg-light">
        <div className="custom-containe">
          <section className="search-block">
            <Container>
              <Row>
                <Col lg="6" className="offset-lg-3">
                  <form className="form-header" onSubmit={handleSearch}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Search Products......"
                        name="searchQuery"
                      />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-normal">
                          <i className="fa fa-search"></i>Search
                        </button>
                      </div>
                    </div>
                  </form>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </section>

      <section className="section-big-py-space ratio_asos bg-light">
        <div className="custom-container">  
          {loading ? <Skeleton/> :<div className="row search-product">
            {searchResults.map((product, i) => (
              <Link href={`/product-details/${product.id}`} key={i}>
                <ProductList product={product} />
              </Link>
            ))}
          </div>}
        </div>
      </section>
    </>
  );
};

export default SearchPage;
