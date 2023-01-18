import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./Container";
import Details from "./Container/Details";
import ErrorPage from "./Container/ErrorPage";
import Contact from "./Container/Contact";
import Nav from "./Container/Nav";

function App() {
  return (
    <>
      <div className="App flex items-center justify-center">
        <React.StrictMode>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Container />} />
              <Route path="/about" element={<Details />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </div>
    </>
  );
}

export default App;
