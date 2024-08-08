import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavLinks from "./Components/Nav";
import { Provider } from "react-redux";
import bakeryStore from "./Components/State/Store";

function App() {
  return (
    <Provider store={bakeryStore}>
      <Router>
        <div className="App">
          <NavLinks />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
