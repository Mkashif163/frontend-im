import React, { useEffect } from "react";
import { NextPage } from "next";
import Layout1 from "views/layouts/layout1";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

const VerifyMail: NextPage = () => {
  const router = useRouter();

  const handleOpenMailbox = () => {
    // You can add the code to open the mailbox (e.g., Gmail) here
    window.open("https://mail.google.com", "_blank");
  };

  useEffect(() => {
    // Check if the user has a token and id in local storage
    const token = localStorage.getItem("token");
    const customerId = localStorage.getItem("id");

    if (token && customerId) {
      // If both token and id exist, navigate to the dashboard page
      router.push("/pages/account/dashboard");
    }
  }, []);

  return (
    <Layout1>
      <div className="d-flex align-items-center justify-content-center m-5">
        <div className="text-center">
          <h3>Check your mailbox to verify your account</h3>
          <Button className="btn-rounded my-5" onClick={handleOpenMailbox}>
            Open Mailbox
          </Button>
        </div>
      </div>
    </Layout1>
  );
};

export default VerifyMail;
