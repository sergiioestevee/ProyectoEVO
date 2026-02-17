// src/context/OrderContext.jsx

import React, { createContext, useReducer } from "react";

const OrderContext = createContext();

const initialState = {
  orders: [],
};

function orderReducer(state, action) {
  switch (action.type) {
    case "SET_ORDERS":
      return { ...state, orders: action.payload };

    case "ADD_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    case "UPDATE_ORDER_STATUS":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id
            ? { ...order, status: action.payload.status }
            : order
        ),
      };

    default:
      return state;
  }
}

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const setOrders = (orders) => {
    dispatch({ type: "SET_ORDERS", payload: orders });
  };

  const addOrder = (order) => {
    dispatch({ type: "ADD_ORDER", payload: order });
  };

  const updateOrderStatus = (id, status) => {
    dispatch({
      type: "UPDATE_ORDER_STATUS",
      payload: { id, status },
    });
  };

  return (
    <OrderContext.Provider
      value={{
        orders: state.orders,
        setOrders,
        addOrder,
        updateOrderStatus,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
