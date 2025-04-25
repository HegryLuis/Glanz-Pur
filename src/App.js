import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./pages/main-page/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
