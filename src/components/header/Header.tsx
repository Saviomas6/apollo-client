import React from "react";
import { Link } from "react-router-dom";
import {
  AddProductButton,
  HeaderContainer,
  HeaderMainLayout,
  LogoHeading,
  RouteLink,
} from "./Header.style";

const Header = () => {
  return (
    <HeaderMainLayout>
      <HeaderContainer>
        <RouteLink to="/">
          <LogoHeading>GraphQL Practice</LogoHeading>
        </RouteLink>
        <RouteLink to="/addProduct">
          <AddProductButton>Add Product</AddProductButton>
        </RouteLink>
      </HeaderContainer>
    </HeaderMainLayout>
  );
};

export default Header;
