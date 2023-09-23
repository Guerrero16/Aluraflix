import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { HeaderCabecera } from "./components/Header";
import { Categoria } from "./pages/Categoria";
import { Video } from "./pages/Video";
import { PiePagina } from "./components/Footer";
import { Error404 } from "./pages/Error404";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { temaClaro } from "./UI/Temas";
import { EditarVideo } from "./pages/EditarVideo";
import { EditarCategoria } from "./pages/EditarCategoria";

function App() {
  return (
    <ThemeProvider theme={temaClaro}>
      <GlobalStyles />
      <Router>
        <HeaderCabecera />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/categoria" element={<Categoria />} />
          <Route path="/video/:id" element={<EditarVideo />} />;
          <Route path="/categoria/:id" element={<EditarCategoria />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <PiePagina />
      </Router>
    </ThemeProvider>

  );
}

export default App;
