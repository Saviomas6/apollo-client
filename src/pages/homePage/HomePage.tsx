import { useState } from "react";
import DetailCard from "../../components/detailCard/DetailCard";
import { GET_PRODUCT_LIST, useProductList } from "../../hooks/useProductList";
import { useRemoveProduct } from "../../hooks/useRemoveProduct";
import CustomModal from "../../shared/customModal/CustomModal";
import LoadingSpinner from "../../shared/loadingSpinner/LoadingSpinner";
import {
  Container,
  DetailCardMainLayout,
  OpacityAnimation,
} from "../../shared/styles";
import { Loading, LoadingMainContainer } from "./HomePage.style";
interface I_ProductList {
  categoryID: number;
  name: string;
  productID: number;
  quantityPerUnit: string;
  reorderLevel: number;
  supplierID: number;
  unitPrice: number;
  unitsInStock: number;
  unitsOnOrder: number;
  __typename: string;
  _id: string;
}
const HomePage = () => {
  const { removeProduct, data, loading, error } = useRemoveProduct();
  const [isModalOpen, setOpenModal] = useState<boolean>(false);
  const handleDelete = (id: string) => {
    setOpenModal(true);
    removeProduct({
      variables: {
        _id: id,
      },
      refetchQueries: [{ query: GET_PRODUCT_LIST }],
    });
  };

  const {
    data: productList,
    loading: productListLoading,
    error: productListError,
  } = useProductList();
  return (
    <>
      <DetailCardMainLayout>
        {productList?.viewer?.productList
          ?.map((product: I_ProductList, index: number) => (
            <OpacityAnimation key={index}>
              <DetailCard product={product} handleDelete={handleDelete} />
            </OpacityAnimation>
          ))
          .reverse()}
      </DetailCardMainLayout>

      {productListLoading && (
        <LoadingMainContainer>
          <LoadingSpinner color="#fff" innerSize="20" outerSize="50" />
        </LoadingMainContainer>
      )}
      {productListError && (
        <LoadingMainContainer>
          <Loading>404 Error Found</Loading>
        </LoadingMainContainer>
      )}
      {isModalOpen && (
        <CustomModal
          data={data?.removeProduct?.record?.name}
          loading={loading}
          textContent="Product Removed Successfully"
          setModalOpen={setOpenModal}
        />
      )}
    </>
  );
};

export default HomePage;
