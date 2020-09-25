import React from "react";

interface ProductCategoryRowProps {
  name: string;
  size: number;
}

const ProductCategoryRow: React.FC<ProductCategoryRowProps> = (props) => (
  <tr>
    <th colSpan={props.size}>{props.name}</th>
  </tr>
);

export default ProductCategoryRow;
