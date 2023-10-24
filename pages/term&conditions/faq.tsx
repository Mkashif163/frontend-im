import { NextPage } from "next";
import Layout1 from "views/layouts/layout1";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, Collapse, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useApiData } from "helpers/data/DataContext";


interface HelpCenter {
  id: number;
  question: string;
  answer: string;
}

interface HelpCenter {
  help_center :any
}

const LeftSidebar: NextPage = () => {
  const [termsAndConditions, setTermsAndConditions] = useState<HelpCenter[]>(
    []
  );


  const apiData = useApiData() as HelpCenter;
  useEffect(() => {
setTermsAndConditions(apiData.help_center);
  }, []);

  const [expandedId, setExpandedId] = useState<number | null>(null);
  const toggleAccordion = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Layout1>
      <section className="faq-section section-big-py-space bg-light">
        <Container>
          <Row>
            <Col sm="12">
              <div className="accordion" id="accordionExample">
                {termsAndConditions.map((term) => (
                  <div key={term.id} style={{ marginBottom: '20px' }}>
                    <Card>
                      <CardHeader>
                        <h5 className="mb-0">
                          <button
                            className={`btn btn-link ${expandedId === term.id ? 'active' : ''}`}
                            type="button"
                            onClick={() => toggleAccordion(term.id)}
                            aria-expanded={expandedId === term.id ? "true" : "false"}
                            aria-controls={`collapse${term.id}`}
                          >
                            <strong><span className="text-black" style={{ textAlign: 'left', float: 'left'}} >{term.question}</span>{" "}</strong>
                            <div style={{ width: '200%', display: 'block' }}>
  <FontAwesomeIcon
    icon={expandedId === term.id ? faCaretUp : faCaretDown}
    className="dropdown-icon text-dark" style={{ float: 'right' }}
  />
</div>

                          </button>
                        </h5>
                      </CardHeader>
                      <Collapse
                        isOpen={expandedId === term.id}
                        id={`collapse${term.id}`}
                        aria-labelledby={`heading${term.id}`}
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <p>{term.answer}</p>
                        </div>
                      </Collapse>
                    </Card>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout1>
  );
};

export default LeftSidebar;
