import React, { useState } from "react";
import { NextPage } from "next";
import { Input,  InputGroup, } from "reactstrap";
import { useRouter } from "next/router";

const Search: NextPage = () => {
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = event.currentTarget.search.value;
    router.push(`/pages/search?${encodeURIComponent(searchValue)}`);
  };

  return (
    <div className="input-block">
      <div className="input-box">
        <form className="big-deal-form" onSubmit={handleSearch}>
          <InputGroup>
           
            <Input name="search" />
            <button type="submit" className="btn btn-normal"><i className="fa fa-search"></i> Search</button>
          </InputGroup>
        </form>
      </div>
    </div>
  );
};

export default Search;
