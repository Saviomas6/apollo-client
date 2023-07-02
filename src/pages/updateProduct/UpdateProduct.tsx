import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import {
  AddProductButton,
  AddProductButtonWrapper,
  AddProductFormContainer,
  AddProductHeader,
  AddProductMainContainer,
  InputField,
  InputLabel,
  OpacityAnimation,
} from "../../shared/styles";
import { ErrorText } from "../addProduct/AddProduct.style";
import { LoadingContainer } from "./UpdateProduct.style";
import { useEffect, useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import LoadingSpinner from "../../shared/loadingSpinner/LoadingSpinner";
import { useUpdateProduct } from "../../hooks/useUpdateProduct";
import { GET_PRODUCT_LIST } from "../../hooks/useProductList";
import CustomModal from "../../shared/customModal/CustomModal";

const addProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required Field!"),
  unitPrice: Yup.number()
    .typeError("you must specify a number")
    .required("Required Field!"),
  unitsInStock: Yup.number()
    .typeError("you must specify a number")
    .required("Required Field!"),
  unitsOnOrder: Yup.number()
    .typeError("you must specify a number")
    .required("Required Field!"),
  productID: Yup.number()
    .typeError("you must specify a number")
    .required("Required Field!"),
  categoryID: Yup.number()
    .typeError("you must specify a number")
    .required("Required Field!"),
  quantityPerUnit: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required Field!"),
  reorderLevel: Yup.number()
    .typeError("you must specify a number")
    .required("Required Field!"),
});

interface I_AddProduct {
  name: string;
  unitPrice: string | number;
  unitsInStock: string | number;
  unitsOnOrder: string | number;
  productID: string | number;
  categoryID: string | number;
  quantityPerUnit: string;
  reorderLevel: string | number;
}

const UpdateProduct = () => {
  const router = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [formValue, setFormValue] = useState<I_AddProduct | null>(null);
  const {
    data: productData,
    loading: productLoading,
    error: productError,
  } = useProduct(String(router.id) && String(router.id));
  const {
    updateProduct,
    data: updateProductData,
    loading: updateProductLoading,
    error: updateProductError,
  } = useUpdateProduct();

  const initialValues: I_AddProduct = {
    name: "",
    unitPrice: "",
    unitsInStock: "",
    unitsOnOrder: "",
    productID: "",
    categoryID: "",
    quantityPerUnit: "",
    reorderLevel: "",
  };

  const savedProductData: I_AddProduct = {
    name: productData?.viewer?.product?.name,
    unitPrice: productData?.viewer?.product?.unitPrice,
    unitsInStock: productData?.viewer?.product?.unitsInStock,
    unitsOnOrder: productData?.viewer?.product?.unitsOnOrder,
    productID: productData?.viewer?.product?.productID,
    categoryID: productData?.viewer?.product?.categoryID,
    quantityPerUnit: productData?.viewer?.product?.quantityPerUnit,
    reorderLevel: productData?.viewer?.product?.reorderLevel,
  };

  useEffect(() => {
    if (savedProductData && productData?.viewer?.product) {
      setFormValue(savedProductData);
    }
  }, [productData]);

  const submitForm = (values: I_AddProduct) => {
    setModalOpen(true);
    updateProduct({
      variables: {
        _id: String(router.id),
        name: values.name,
        unitPrice: Number(values.unitPrice),
        unitsInStock: Number(values.unitsInStock),
        unitsOnOrder: Number(values.unitsOnOrder),
        productID: Number(values.productID),
        categoryID: Number(values.categoryID),
        quantityPerUnit: values.quantityPerUnit,
        reorderLevel: Number(values.reorderLevel),
      },
      refetchQueries: [{ query: GET_PRODUCT_LIST }],
    });
  };

  return (
    <>
      {productLoading ? (
        <LoadingContainer>
          <LoadingSpinner color="#fff" innerSize="20" outerSize="50" />
        </LoadingContainer>
      ) : (
        <OpacityAnimation>
          <AddProductMainContainer>
            <AddProductHeader>Update Product</AddProductHeader>
            <AddProductFormContainer>
              <Formik
                initialValues={formValue || initialValues}
                onSubmit={submitForm}
                validationSchema={addProductSchema}
                enableReinitialize
              >
                {({ errors, touched, isValid, dirty }) => (
                  <Form>
                    <InputLabel>Name</InputLabel>
                    <InputField
                      type="text"
                      name="name"
                      placeholder="Enter the name"
                    />
                    {errors.name || touched.name ? (
                      <ErrorText>{errors.name}</ErrorText>
                    ) : null}
                    <InputLabel>Unit Price</InputLabel>
                    <InputField
                      type="text"
                      name="unitPrice"
                      placeholder="Enter the unit price"
                    />
                    {errors.unitPrice || touched.unitPrice ? (
                      <ErrorText>{errors.unitPrice}</ErrorText>
                    ) : null}
                    <InputLabel>Units In Stock</InputLabel>
                    <InputField
                      type="text"
                      name="unitsInStock"
                      placeholder="Enter the unit stock"
                    />
                    {errors.unitsInStock || touched.unitsInStock ? (
                      <ErrorText>{errors.unitsInStock}</ErrorText>
                    ) : null}
                    <InputLabel>Units On Order</InputLabel>
                    <InputField
                      type="text"
                      name="unitsOnOrder"
                      placeholder="Enter the units_order"
                    />
                    {errors.unitsOnOrder || touched.unitsOnOrder ? (
                      <ErrorText>{errors.unitsOnOrder}</ErrorText>
                    ) : null}
                    <InputLabel>ProductID</InputLabel>
                    <InputField
                      type="text"
                      name="productID"
                      placeholder="Enter the product_id"
                    />
                    {errors.productID || touched.productID ? (
                      <ErrorText>{errors.productID}</ErrorText>
                    ) : null}
                    <InputLabel>CategoryID</InputLabel>
                    <InputField
                      type="text"
                      name="categoryID"
                      placeholder="Enter the category_id"
                    />
                    {errors.categoryID || touched.categoryID ? (
                      <ErrorText>{errors.categoryID}</ErrorText>
                    ) : null}
                    <InputLabel>Quantity Per Unit</InputLabel>
                    <InputField
                      type="text"
                      name="quantityPerUnit"
                      placeholder="Enter the quantity unit"
                    />
                    {errors.quantityPerUnit || touched.quantityPerUnit ? (
                      <ErrorText>{errors.quantityPerUnit}</ErrorText>
                    ) : null}
                    <InputLabel>Re-Order Level</InputLabel>
                    <InputField
                      type="text"
                      name="reorderLevel"
                      placeholder="Enter the reorder_level"
                    />
                    {errors.reorderLevel || touched.reorderLevel ? (
                      <ErrorText>{errors.reorderLevel}</ErrorText>
                    ) : null}
                    <AddProductButtonWrapper>
                      <AddProductButton
                        disabled={!(isValid && dirty)}
                        type="submit"
                        bgColor="#54DE62"
                      >
                        Update
                      </AddProductButton>
                    </AddProductButtonWrapper>
                  </Form>
                )}
              </Formik>
            </AddProductFormContainer>
          </AddProductMainContainer>
        </OpacityAnimation>
      )}

      {isModalOpen && (
        <CustomModal
          textContent="Product Updated Successfully"
          loading={updateProductLoading}
          data={updateProductData?.updateProduct?.record?.name}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default UpdateProduct;
