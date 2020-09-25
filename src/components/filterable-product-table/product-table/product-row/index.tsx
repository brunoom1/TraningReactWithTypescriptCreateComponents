import React from "react";

interface ProductRowProps {
  columns: any[];
  data: {};
}

const ProductRow: React.FC<ProductRowProps> = (props) => (
  <tr>
    {props.columns.map((column) => (
      <td key={column}>{props.data[column]}</td>
    ))}
  </tr>
);

export default ProductRow;
