import React from "react";
import { Button } from "../Button/Button.style";
import { SearchBox, SearchBtnDiv, SearchInput } from "./SearchBar.style";

const SearchBar = () => {
  return (
    <SearchBox>
      <SearchInput placeholder="🔍 Search" />
      <SearchBtnDiv>
        <Button search>Search</Button>
      </SearchBtnDiv>
    </SearchBox>
  );
};

export default SearchBar;
