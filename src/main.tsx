import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoutePath from "./RoutePath";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-compose.herokuapp.com/northwind",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <RoutePath />
    </ApolloProvider>
  </BrowserRouter>
);
