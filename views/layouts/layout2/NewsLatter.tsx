import React, { useState } from "react";
import { Col, Row, Modal, ModalBody, Button } from "reactstrap";
import { NextPage } from "next";

const NewsLatter: NextPage = () => {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} toggle={toggle} className="fade bd-example-modal-lg theme-modal" centered id="exampleModal">
      <ModalBody className="modal-content">
        <Row className="news-latter">
          <Col lg="12">
            <div className="modal-bg">
              <div className="offer-content">
                <Button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggle}>
                  <span aria-hidden="true">x</span>
                </Button>
                <div>
                  <h2>newsletter</h2>
                  <p>
                    Subscribe to our website mailling list <br /> and get a Offer, Just for you!
                  </p>
                  <form
                    action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda"
                    className="auth-form needs-validation"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    target="_blank">
                    <div className="form-group mx-sm-3">
                      <input type="email" className="form-control" name="EMAIL" id="mce-EMAIL" placeholder="Enter your email" required />
                      <button type="submit" className="btn btn-theme btn-normal btn-sm " id="mc-submit">
                        subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default NewsLatter;
