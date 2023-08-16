import React from "react";
import { NextPage } from "next";
import { Row, Col, Media, Container, Form, Label, Input } from "reactstrap";
import Breadcrumb from "../Containers/Breadcrumb";

const LeftSidebar: NextPage = () => {
  return (
    <div className="bg-light">
      <Breadcrumb title="blog-detail" parent="home" />
      {/* <!-- section start --> */}
      <section className="blog-detail-page section-big-py-space ratio2_3">
        <Container>
          <Row className="section-big-pb-space">
            <Col sm="12" className="blog-detail">
              <div className="creative-card">
                <Media src="/images/blog/main.jpg" className="img-fluid w-100 " alt="blog" />
                <h3>Also the leap into electronic typesetting, remaining essentially unchanged.</h3>
                <ul className="post-social">
                  <li>25 January 2023</li>
                  <li>Posted By : Admin Admin</li>
                  <li>
                    <i className="fa fa-heart"></i> 5 Hits
                  </li>
                  <li>
                    <i className="fa fa-comments"></i> 10 Comment
                  </li>
                </ul>
                <p>
                  Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus. Vivamus ut augue nec justo
                  viverra laoreet. Nunc efficitur, arcu ac cursus gravida, lorem elit commodo urna, id viverra libero tellus non ipsum. Fusce molestie ultrices nibh feugiat pretium. Donec pulvinar
                  arcu metus, et dapibus odio condimentum id. Quisque malesuada mauris sit amet dui feugiat, ut pretium mauris luctus. Ut aliquam, tellus nec molestie condimentum, tellus arcu
                  dignissim quam, a gravida nunc nulla vel magna. Sed pulvinar tortor et euismod blandit. Proin accumsan orci ac nunc fermentum vehicula.
                </p>
                <p>
                  Cras quis neque urna. Pellentesque mollis, dui nec elementum elementum, ipsum quam suscipit ligula, sit amet lobortis dolor sem sed neque. Vivamus consequat est non sodales
                  efficitur. Aliquam sodales eleifend sodales. Aliquam auctor ipsum quis nisl facilisis, at convallis mauris iaculis. Duis eleifend, magna ac convallis blandit, dui dui auctor leo, sed
                  tincidunt nisi mauris ut nulla. Praesent porttitor dui ac turpis commodo porttitor. Integer ligula nisi, bibendum non sem at, porta condimentum dui.
                </p>
                <p>
                  Proin id eleifend diam, euismod dictum nibh. Ut ullamcorper in purus at tempor. Nullam mattis risus nec velit semper lobortis. Donec accumsan ligula fermentum, ultricies massa eget,
                  cursus leo. Suspendisse placerat elit et lacus aliquam, ut elementum leo aliquet. Integer ornare, ipsum eu lacinia viverra, lectus ipsum scelerisque nisl, nec iaculis leo elit id
                  arcu. Aliquam id ante elit. Donec commodo purus eget lacus pharetra, et egestas metus blandit. Quisque pellentesque porta urna.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="section-big-pb-space blog-advance ">
            <Col lg="6">
              <div className="creative-card">
                <Media src="/images/blog/1.jpg" className="img-fluid " alt="blog" />
                <ul>
                  <li>Donec ut metus sit amet elit consectetur vel turpis.</li>
                  <li>Aenean in mi eu elit mollis tincidunt.</li>
                  <li>Etiam blandit metus vitae purus lacinia ultricies.</li>
                  <li>Nunc quis nulla sagittis, tempus metus.</li>
                  <li>In scelerisque libero ut mi ornare, neque pulvinar.</li>
                  <li>Morbi molestie lacus blandit interdum sodales.</li>
                  <li>Curabitur eleifend velit molestie eleifend interdum.</li>
                  <li>Vestibulum fringilla tortor et lorem sagittis,</li>
                  <li>In scelerisque libero ut mi ornare, neque pulvinar.</li>
                  <li>Morbi molestie lacus blandit interdum sodales.</li>
                  <li>Curabitur eleifend velit molestie eleifend interdum.</li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <div className="creative-card">
                <Media src="/images/blog/2.jpg" className="img-fluid  " alt="blog" />
                <p>
                  Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Nunc at urna dolor. Mauris odio nisi, rhoncus ac justo eget, lacinia iaculis lectus.{" "}
                </p>
                <p className="mt-2">
                  Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Nunc at urna dolor. Mauris odio nisi, rhoncus ac justo eget, lacinia iaculis lectus. rhoncus ac justo eget, lacinia iaculis lectus.
                </p>
                <p className="mt-2">
                  Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="section-big-pb-space">
            <Col sm="12">
              <div className="creative-card">
                <ul className="comment-section">
                  <li>
                    <div className="media">
                      <Media src="/images/avtar/1.jpg" alt="Generic placeholder image" />
                      <div className="media-body">
                        <h6>
                          Mark Jecno <span>( 12 Jannuary 2023 at 1:30AM )</span>
                        </h6>
                        <p>
                          Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec
                          ullamcorper tempor. Aenean nec felis dui.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <Media src="/images/avtar/2.jpg" alt="Generic placeholder image" />
                      <div className="media-body">
                        <h6>
                          Mark Jecno <span>( 12 Jannuary 2023 at 1:30AM )</span>
                        </h6>
                        <p>
                          Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec
                          ullamcorper tempor. Aenean nec felis dui.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <Media src="/images/avtar/3.jpg" alt="Generic placeholder image" />
                      <div className="media-body">
                        <h6>
                          Mark Jecno <span>( 12 Jannuary 2023 at 1:30AM )</span>
                        </h6>
                        <p>
                          Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec
                          ullamcorper tempor. Aenean nec felis dui.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="blog-contact">
            <Col sm="12">
              <div className="creative-card">
                <h2>Leave Your Comment</h2>
                <Form className="theme-form">
                  <div className="form-row row">
                    <Col md="12">
                      <Label htmlFor="name">Name</Label>
                      <Input type="text" className="forInputm-control" id="name" placeholder="Enter Your name" required />
                    </Col>
                    <Col md="12">
                      <Label htmlFor="email">Email</Label>
                      <Input type="text" className="form-Inputcontrol" id="email" placeholder="Email" required />
                    </Col>
                    <Col md="12">
                      <Label htmlFor="exampleFormControlTextarea1">Comment</Label>
                      <textarea className="form-control" placeholder="Write Your InputComment" id="exampleFormControlTextarea1"></textarea>
                    </Col>
                    <Col md="12">
                      <button className="btn btn-normal" type="submit">
                        Post Comment
                      </button>
                    </Col>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <!-- Section ends --> */}
    </div>
  );
};

export default LeftSidebar;
