import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App"; // Imported app component
import { BrowserRouter } from 'react-router-dom' // Imported BrowserRouter for the routing
import store from "./redux/store"; // Imported store configure (redux)
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrapping my Provider component inside the BrowserRouter */}
    <BrowserRouter >
      {/* Wrapping my App component inside the Provider */}
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
