import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./pages/main-page/MainPage";
import ReinigungPage from "./pages/reinigung/ReinigungPage";

function App() {
  return (
    <div className="App">
      <Header />
      <ReinigungPage />
      {/* <MainPage /> */}
      <Footer />
    </div>
  );
}

export default App;
