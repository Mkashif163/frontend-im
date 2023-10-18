import { NextPage } from "next";
import Layout1 from "views/layouts/layout1";
import React, { useEffect, useState } from "react";

interface TermCondition {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

const LeftSidebar: NextPage = () => {
  const [termsAndConditions, setTermsAndConditions] = useState<TermCondition[]>(
    []
  );

  useEffect(() => {
<<<<<<< HEAD
    fetch("http://18.235.14.45/api/homeapi")
=======
    // Fetch data directly within the useEffect
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}$terms_and_conditions`)
>>>>>>> 1cd19f0243b4cd35c982051ae84b7042326ce330
      .then((response) => response.json())
      .then((data: { terms_and_conditions: TermCondition[] }) => {
        const termsData = data.terms_and_conditions;
        setTermsAndConditions(termsData);
      })
      .catch((error: Error) => {
        // Handle any errors here
        console.error("Error fetching data:", error);
      });
  }, []); 

  const filteredTerm = termsAndConditions.find((term) => term.id === 11);

  return (
    <Layout1>
      <section className="section-big-pt-space section-big-pb-space ratio_asos bg-light">
        <div className="custom-container">
          <div className="flex">
            <div className="accordian">
<<<<<<< HEAD
              {filteredTerm && (
                <div>
                  <b>
                    <h2
                      className="title"
                      style={{
                        fontSize: "16px",
                        fontWeight: "800",
                        textTransform: "uppercase",
                      }}
                    >
                      {filteredTerm.title}
                    </h2>
                  </b>
                  <br />
                  <div
                    className="description"
                    style={{
                      textAlign: "justify",
                      fontSize: "14px",
                      textJustify: "inter-word",
                    }}
                    dangerouslySetInnerHTML={{ __html: filteredTerm.description }}
                  />
                  <br />
                </div>
              )}
=======
              {/* Render the fetched terms_and_conditions data here */}
              {/* {termsAndConditions.map((term) => (
                <div key={termsAndConditions.id}>
                  <h2>{termsAndConditions.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: termsAndConditions.description }} />
                </div>
              ))} */}
>>>>>>> 1cd19f0243b4cd35c982051ae84b7042326ce330
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
};

export default LeftSidebar;
