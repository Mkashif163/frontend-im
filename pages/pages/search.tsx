import React from "react";
import { NextPage } from "next";

import Layout1 from "../../views/layouts/layout1";
import SearchPage from "../../views/pages/searchPage";

const Search: NextPage = () => {
  return (
    <Layout1>
      <SearchPage />
    </Layout1>
  );
};

export default Search;
