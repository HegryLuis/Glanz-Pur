import { useState } from "react";
import "./App.css";
import HausmeisterservicePage from "./pages/hausmeisterservice/HausmeisterservicePage";
import MainPage from "./pages/main-page/MainPage";
import ReinigungPage from "./pages/reinigung/ReinigungPage";
import UmzugPage from "./pages/uzmug/UmzugPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Glanz-Pur/" element={<MainPage />} />
          <Route path="/Glanz-Pur/reinigung" element={<ReinigungPage />} />
          <Route path="/Glanz-Pur/umzug" element={<UmzugPage />} />
          <Route
            path="/Glanz-Pur/hausmeisterservice"
            element={<HausmeisterservicePage />}
          />

          <Route path="*" element={<Navigate to="/Glanz-Pur/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
