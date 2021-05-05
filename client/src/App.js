import React from "react";
import Routes from "./pages/route";
import "./App.css"
import "hover.css"

import { Provider } from "react-redux";
import store from "./Store/Store";



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {" "}
      <Routes />
    </div>
    </Provider>
  );
}

export default App;
