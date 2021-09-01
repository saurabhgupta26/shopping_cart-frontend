import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  const [cartData, setCartData] = useState(null);

  return <Dashboard />;
}

export default App;
