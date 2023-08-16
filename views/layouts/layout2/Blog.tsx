import React from "react";
import Slider from "react-slick";
import { Container, Row, Col, Media } from "reactstrap";

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BlogSection: React.FC = () => (
  <section className="blog ">
    {/* <!--title start--> */}
    <div className="title3">
      <h4>latest blog</h4>
    </div>
    {/* <!--title end--> */}
    <Container>
      <Row>
        <Col xs="12">
          <Slider className="blog-slide no-arrow" {...settings}>
            <div>
              <div className="blog-contain">
                <div className="blog-img">
                  <Media src="/images/layout-1/blog/1.jpg" alt="blog" className="img-fluid  w-100" />
                </div>
                <div className="blog-details">
                  <h4>Latest News Post</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.</p>
                  <span>
                    <a href="/blog/blog-details">read more</a>
                  </span>
                </div>
                <div className="blog-label">
                  <p>25 july 2023</p>
                </div>
              </div>
            </div>
            <div>
              <div className="blog-contain">
                <div className="blog-img">
                  <Media src="/images/layout-1/blog/2.jpg" alt="blog" className="img-fluid w-100 " />
                </div>
                <div className="blog-details">
                  <h4>Latest News Post</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.</p>
                  <span>
                    <a href="/blog/blog-details">read more</a>
                  </span>
                </div>
                <div className="blog-label">
                  <p>25 july 2023</p>
                </div>
              </div>
            </div>
            <div>
              <div className="blog-contain">
                <div className="blog-img">
                  <Media src="/images/layout-1/blog/3.jpg" alt="blog" className="img-fluid w-100 " />
                </div>
                <div className="blog-details">
                  <h4>Latest News Post</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.</p>
                  <span>
                    <a href="/blog/blog-details">read more</a>
                  </span>
                </div>
                <div className="blog-label">
                  <p>25 july 2023</p>
                </div>
              </div>
            </div>
            <div>
              <div className="blog-contain">
                <div className="blog-img">
                  <Media src="/images/layout-1/blog/2.jpg" alt="blog" className="img-fluid  w-100" />
                </div>
                <div className="blog-details">
                  <h4>Latest News Post</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.</p>
                  <span>
                    <a href="/blog/blog-details">read more</a>
                  </span>
                </div>
                <div className="blog-label">
                  <p>25 july 2023</p>
                </div>
              </div>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default BlogSection;
