import { gql, useMutation } from "@apollo/client";

const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $_id: MongoID!
    $name: String
    $unitPrice: Float
    $unitsInStock: Float
    $unitsOnOrder: Float
    $productID: Float
    $categoryID: Float
    $quantityPerUnit: String
    $reorderLevel: Float
  ) {
    updateProduct(
      _id: $_id
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

export const useUpdateProduct = () => {
  const [updateProduct, { data, loading, error }] = useMutation(UPDATE_PRODUCT);
  return {
    updateProduct,
    data,
    loading,
    error,
  };
};
