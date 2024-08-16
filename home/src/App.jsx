import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./components/Header";

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store";
import { increment } from "./store/counterSlice";

// Lazy load the remote page
const RemotePage = lazy(() => import("product/ProductDetailPage"));

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/remote-page">Remote Page</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/remote-page" element={<RemotePage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

const Home = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
