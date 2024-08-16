import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "home/components/Header";
import ProductDetailPage from "./ProductDetailPage";
import { Provider, useDispatch, useSelector } from "react-redux";


import { increment } from "home/store/counterSlice";
import store from "home/store/store";

const App = () => {
 
  return (
    <div className="container">
      <Header />
      <ProductDetailPage />
      
    </div>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
