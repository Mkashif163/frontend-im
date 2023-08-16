import React, { Fragment, useEffect, useState } from "react";

const Loader = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <Fragment>
      {isLoading ? (
        <div className="loader-wrapper">
          <div>
            <img src="/images/loader.gif" alt="loader" />{" "}
          </div>
        </div>
      ) : (
        props.children
      )}
    </Fragment>
  );
};

export default Loader;
