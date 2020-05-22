import React from "react";
import "./styles/base.css";
import "./styles/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
