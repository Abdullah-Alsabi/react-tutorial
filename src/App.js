import "./App.css";
import React from "react";
// import Converter from "./componets/Converter";
import Api from "./pages/AllCharactersPage";
import DetailsPage from "./pages/SingleCharacterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./componets/NavBar";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<Api />} />
          <Route path="/character/:id" element={<DetailsPage />} />
        </Routes>{" "}
      </div>
    </BrowserRouter>
  );
}
export default App;
