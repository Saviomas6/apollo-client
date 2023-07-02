import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GET_PRODUCT_LIST } from "../../hooks/useProductList";
import { useRemoveProduct } from "../../hooks/useRemoveProduct";
import CustomModal from "../../shared/customModal/CustomModal";
import {
  Button,
  DetailCardButtonWrapper,
  DetailCardContainer,
  DetailCardText,
  RedirectLink,
} from "./DetailCard.style";

interface I_Product {
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

interface I_ProductList {
  product: I_Product;
  handleDelete: any;
}

const DetailCard = ({ product, handleDelete }: I_ProductList) => {
  return (
    <>
      <DetailCardContainer>
        <DetailCardText>
          ID :
          {product?._id?.length >= 20
            ? ` ${product?._id.slice(0, 20)}...`
            : product?._id}
        </DetailCardText>
        <DetailCardText>
          Name :&nbsp;
          {product?.name?.length >= 20
            ? `${product?.name?.slice(0, 20)}...`
            : product?.name}
        </DetailCardText>
        <DetailCardText>Unit Price : {product?.unitPrice}</DetailCardText>
        <DetailCardText>
          Unit In Stocks : {product?.unitsInStock}
        </DetailCardText>
        <DetailCardText>
          Quantity Unit : {product?.quantityPerUnit}
        </DetailCardText>
        <DetailCardText>Reorder Level : {product?.reorderLevel}</DetailCardText>
        <DetailCardButtonWrapper>
          <RedirectLink to={`/updateProduct/${product._id}`}>
            <Button bgColor="#F6D754" color="#000">
              Update
            </Button>
          </RedirectLink>

          <Button
            onClick={() => handleDelete(product?._id)}
            bgColor="#d21f1f"
            color="#000"
          >
            Delete
          </Button>
        </DetailCardButtonWrapper>
      </DetailCardContainer>
    </>
  );
};

export default DetailCard;
