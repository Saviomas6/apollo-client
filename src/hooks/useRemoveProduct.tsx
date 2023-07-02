import { gql, useMutation } from "@apollo/client";
const REMOVE_PRODUCT = gql`
  mutation RemoveProduct($_id: MongoID) {
    removeProduct(filter: { _id: $_id }) {
      record {
        name
      }
    }
  }
`;
export const useRemoveProduct = () => {
  const [removeProduct, { data, loading, error }] = useMutation(REMOVE_PRODUCT);
  return {
    removeProduct,
    data,
    loading,
    error,
  };
};
