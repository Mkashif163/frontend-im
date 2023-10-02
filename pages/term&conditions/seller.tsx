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
  // Define state to store the fetched terms and conditions
  const [termsAndConditions, setTermsAndConditions] = useState<TermCondition[]>(
    []
  );

  // Use useEffect to fetch data from the API when the component mounts
  useEffect(() => {
    // Fetch data directly within the useEffect
    fetch("http://18.235.14.45/$terms_and_conditions")
      .then((response) => response.json())
      .then((data: TermCondition[]) => {
        // Update the state with the fetched data
        setTermsAndConditions(data);
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
                <div key={termsAndConditions.id}>
                  <h2>{termsAndConditions.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: termsAndConditions.description }} />
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
