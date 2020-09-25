import React from "react";

import ProductCategoryRow from "./product-category-row";
import ProductRow from "./product-row";

interface ProductTableProps {
  data: any[];
  columns: any[];
}

const ProductTable: React.FC<ProductTableProps> = (props) => {
  let category = "";

  return (
    <table>
      <thead>
        <tr>
          {props.columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row) => {
          let update = false;

          if (row.category !== category) {
            category = row.category;
            update = true;
          }

          return (
            <>
              {update && (
                <ProductCategoryRow
                  name={category}
                  size={props.columns.length}
                />
              )}
              <ProductRow data={row} columns={props.columns} />
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
