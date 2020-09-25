import React from "react";

import GlobalStyle from "./styles/index";
import FilterableProductTable from "./components/filterable-product-table";

const data = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

export default function App() {
  return (
    <div className="App">
      <h1> Create a table data traking react documentation </h1>

      <p>
        The link{" "}
        <a href="https://reactjs.org/docs/thinking-in-react.html">
          https://reactjs.org/docs/thinking-in-react.html
        </a>
      </p>

      <FilterableProductTable data={data} columns={["name", "price"]} />
      <GlobalStyle />
    </div>
  );
}
