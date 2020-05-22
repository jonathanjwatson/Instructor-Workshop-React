import React from "react";
import "./styles/base.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <h1>Hello World!</h1>
      <Footer />
    </>
  );
}

export default App;
