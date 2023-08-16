import React, { useState } from "react";
import { NextPage } from "next";
import { Modal, ModalBody, Input, Form, Button } from "reactstrap";

const NewsLatter: NextPage = () => {
  const [modal, setModal] = useState(true);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    // < !--modal popup start-->
    <Modal isOpen={modal} toggle={toggle} centered={true} size="lg" className="theme-modal" id="exampleModal" role="dialog" aria-hidden="true">
      <ModalBody className="modal-content">
        <Button className="close" data-dismiss="modal" aria-label="Close" onClick={toggle}>
          <span aria-hidden="true">×</span>
        </Button>
        <div className="news-latter">
          <div className="modal-bg">
            <div className="offer-content">
              <div>
                <h2>newsletter</h2>
                <p>
                  Subscribe to our website mailling list <br /> and get a Offer, Just for you!
                </p>
                <Form
                  action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda"
                  className="auth-form needs-validation"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank">
                  <div className="form-group mx-sm-3">
                    <Input type="email" className="form-control" name="EMAIL" id="mce-EMAIL" placeholder="Enter your email" required />
                    <Button className="btn btn-theme btn-normal btn-sm " id="mc-submit">
                      subscribe
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default NewsLatter;
