import React, { FC, FormEvent, useCallback, useState } from "react";
import { Container } from "./styles";

import SearchBar from "./search-bar";
import ProductTable from "./product-table";

interface FilterableProductTableProps {
  data: any[];
  columns: any[];
}

type InputCallback = (evt: FormEvent<HTMLInputElement>) => void;
type FilterFunctionType = () => [];

const FilterableProductTable: FC<FilterableProductTableProps> = (props) => {
  const [search, setSearch] = useState<string>("");
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);

  const onSearchHandle = useCallback<InputCallback>((evt) => {
    const input = evt.currentTarget;

    if (input.type === "checkbox") {
      setOnlyInStock(!!input.checked);
    } else {
      setSearch(input.value);
    }
  }, []);

  const filterData = useCallback<FilterFunctionType>(() => {
    let filteredData = props.data;

    if (onlyInStock) {
      filteredData = filteredData.filter((item) => item.stocked);
    }

    if (search) {
      filteredData = filteredData.filter(
        (item) => item.name.indexOf(search) !== -1
      );
    }

    return filteredData;
  }, [search, onlyInStock]);

  return (
    <Container>
      <SearchBar onInput={onSearchHandle} />
      <ProductTable columns={props.columns} data={filterData()} />
    </Container>
  );
};

export default FilterableProductTable;
