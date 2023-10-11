import React, { useState } from "react";
import "./App.css";
import FoodList from "./components/FoodList";

import { Row, Divider } from "antd";

function App() {
  return (
    <div className="App">
      <Divider>
        <h2>FoodList</h2>
      </Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
      <FoodList />      
      </Row>
    </div>
  );
}

export default App;
