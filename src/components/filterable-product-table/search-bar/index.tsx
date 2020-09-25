import React, { FormEvent } from "react";

import SearchBarContainer from "./style";

interface SearchBarProps {
  onInput: (evt: FormEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => (
  <SearchBarContainer>
    <input type="text" placeholder="Search ..." onInput={props.onInput} />
    <div className="checkbox">
      <input type="checkbox" value="" onInput={props.onInput} />
      Only show products in stock
    </div>
  </SearchBarContainer>
);

export default SearchBar;
