import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import "antd/dist/antd.css";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
