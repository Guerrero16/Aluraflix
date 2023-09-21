import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { HeaderCabecera } from "./components/Header";
import { Categoria } from "./pages/Categoria";
import { Video } from "./pages/Video";
import { Footer } from "./components/Footer";

import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { temaClaro } from "./UI/Temas";


function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={temaClaro}>
          <GlobalStyles />
          <HeaderCabecera />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<Video />} />
            <Route path="/categoria" element={<Categoria />} />

          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>

    </>



  );
}

export default App;
