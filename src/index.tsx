import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import "./index.css";
import rootReducer from "./redux/rootReducer";
import "./tailwind.output.css";

const store = createStore(rootReducer);

ReactDOM.render(
  
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
