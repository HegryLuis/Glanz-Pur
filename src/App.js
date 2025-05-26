import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import SuccessModal from "./components/successModal/SuccessModal";
import HausmeisterservicePage from "./pages/hausmeisterservice/HausmeisterservicePage";
import MainPage from "./pages/main-page/MainPage";
import ReinigungPage from "./pages/reinigung/ReinigungPage";
import UmzugPage from "./pages/uzmug/UmzugPage";

function App() {
  const [isModalOpen, setIsModal] = useState(true);

  return (
    <div className="App">
      <Header />
      <MainPage />
      <ReinigungPage />
      <UmzugPage />
      <HausmeisterservicePage />
      <Footer />
    </div>
  );
}

export default App;
