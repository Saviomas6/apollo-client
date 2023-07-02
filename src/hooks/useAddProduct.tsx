import { gql, useMutation } from "@apollo/client";

const ADD_PRODUCT = gql`
  mutation CreateProduct(
    $name: String
    $unitPrice: Float
    $unitsInStock: Float
    $unitsOnOrder: Float
    $productID: Float
    $categoryID: Float
    $quantityPerUnit: String
    $reorderLevel: Float
  ) {
    createProduct(
      record: {
        name: $name
        unitPrice: $unitPrice
        unitsInStock: $unitsInStock
        unitsOnOrder: $unitsOnOrder
        productID: $productID
        categoryID: $categoryID
        quantityPerUnit: $quantityPerUnit
        reorderLevel: $reorderLevel
      }
    ) {
      record {
        name
      }
    }
  }
`;

export const useAddProduct = () => {
  const [createProduct, { data, loading, error }] = useMutation(ADD_PRODUCT);
  return {
    createProduct,
    data,
    loading,
    error,
  };
};
