import { NextPage } from "next";
import Layout1 from "views/layouts/layout1";
import React, { useEffect, useState } from "react";
import { useApiData } from "helpers/data/DataContext";

interface TermCondition {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

interface termsCon {
  terms_and_conditions :any
}

const LeftSidebar: NextPage = () => {
  const [termsAndConditions, setTermsAndConditions] = useState<TermCondition[]>(
    []
  );

  const apiData = useApiData() as termsCon;

  useEffect(() => {

    // Fetch data directly within the useEffect
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}$terms_and_conditions`)
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
              {filteredTerm && (
                <div>
                  <b>
                    <h2
                      className="title"
                      style={{
                        fontSize: "18px",
                        fontWeight: "800",
                        textTransform: "uppercase",
                      textAlign: "center",
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
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
};

export default LeftSidebar;
