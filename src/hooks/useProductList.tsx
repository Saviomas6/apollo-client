import React from "react";
import { useQuery, gql } from "@apollo/client";
export const GET_PRODUCT_LIST = gql`
  query {
    viewer {
      productList {
        unitPrice
        name
        _id
        unitsInStock
        unitsOnOrder
        productID
        supplierID
        categoryID
        quantityPerUnit
        reorderLevel
      }
    }
  }
`;

export const useProductList = () => {
  const { data, loading, error } = useQuery(GET_PRODUCT_LIST);
  return {
    data,
    loading,
    error,
  };
};
