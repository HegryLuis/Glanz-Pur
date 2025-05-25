import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import HausmeisterservicePage from "./pages/hausmeisterservice/HausmeisterservicePage";
import MainPage from "./pages/main-page/MainPage";
import ReinigungPage from "./pages/reinigung/ReinigungPage";
import UmzugPage from "./pages/uzmug/UmzugPage";

function App() {
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
