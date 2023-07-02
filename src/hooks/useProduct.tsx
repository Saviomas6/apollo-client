import { useQuery, gql } from "@apollo/client";

export const GET_UNIQUE_PRODUCT_LIST = gql`
  query Product($_id: MongoID) {
    viewer {
      product(filter: { _id: $_id }) {
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

export const useProduct = (_id: string) => {
  const { data, loading, error } = useQuery(GET_UNIQUE_PRODUCT_LIST, {
    variables: {
      _id,
    },
  });
  return {
    data,
    loading,
    error,
  };
};
