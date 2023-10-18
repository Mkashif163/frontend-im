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
    fetch("http://18.235.14.45/api/homeapi")
      .then((response) => response.json())
      .then((data: { terms_and_conditions: TermCondition[] }) => {
        const termsData = data.terms_and_conditions;
        setTermsAndConditions(termsData);
      })
      .catch((error: Error) => {
        // Handle any errors here
        console.error("Error fetching data:", error);
      });
  }, []); // The empty array means this effect runs only once when the component mounts

  return (
    <Layout1>
      <section className="section-big-pt-space section-big-pb-space ratio_asos bg-light">
        <div className="custom-container">
          <div className="flex">
            <div className="accordian">
              {/* Render the fetched terms_and_conditions data here */}
              {termsAndConditions.map((term) => (
                <div key={term.id}>
                  <b><h2 className="title" style={{ fontSize: '16px', fontWeight: '800', textTransform: 'uppercase'}}>{term.title}</h2></b>
                  <br/>
                  <div className="description" style={{textAlign: 'justify', fontSize: '14px', textJustify: 'inter-word'}} dangerouslySetInnerHTML={{ __html: term.description }} />
                  <br/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
};

export default LeftSidebar;
