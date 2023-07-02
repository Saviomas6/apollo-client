import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useAddProduct } from "../../hooks/useAddProduct";
import { GET_PRODUCT_LIST } from "../../hooks/useProductList";
import CustomModal from "../../shared/customModal/CustomModal";
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

import { ErrorText } from "./AddProduct.style";

interface I_AddProduct {
  name: string;
  unitPrice: string;
  unitsInStock: string;
  unitsOnOrder: string;
  productID: string;
  categoryID: string;
  quantityPerUnit: string;
  reorderLevel: string;
}
interface I_Reset {
  resetForm(): void;
}
const AddProduct = () => {
  const [isModalOpen, setModalOpen] = useState(false);
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

  const { createProduct, data, loading, error } = useAddProduct();
  const submitForm = (values: I_AddProduct, { resetForm }: I_Reset) => {
    setModalOpen(true);
    createProduct({
      variables: {
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
    if (data?.createProduct?.record?.name && !loading) {
      resetForm();
    }
  };

  return (
    <>
      <OpacityAnimation>
        <AddProductMainContainer>
          <AddProductHeader>AddProduct</AddProductHeader>
          <AddProductFormContainer>
            <Formik
              initialValues={initialValues}
              onSubmit={submitForm}
              validationSchema={addProductSchema}
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
                      Submit
                    </AddProductButton>
                  </AddProductButtonWrapper>
                </Form>
              )}
            </Formik>
          </AddProductFormContainer>
        </AddProductMainContainer>
      </OpacityAnimation>
      {isModalOpen && (
        <CustomModal
          textContent="Product Added Successfully"
          loading={loading}
          data={data?.createProduct?.record?.name}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default AddProduct;
