// src/context/ProductContext.jsx

import React, { createContext, useReducer } from "react";

const ProductContext = createContext();

const initialState = {
  products: [],
};

function productReducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const setProducts = (products) => {
    dispatch({ type: "SET_PRODUCTS", payload: products });
  };

  const addProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const updateProduct = (product) => {
    dispatch({ type: "UPDATE_PRODUCT", payload: product });
  };

  const deleteProduct = (id) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        setProducts,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
