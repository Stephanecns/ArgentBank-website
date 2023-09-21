//App.js est le fichier où tu définis l'apparence et le contenu de l'application
import { useLocation } from "react-router-dom";
import "../src/styles/App.css";
import "../src/styles/main.css";
import Router from "./components/Router.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomHeader from "./components/CustomHeader";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/user" ? <CustomHeader /> : <Header />}
      <Router />
      <Footer />
    </div>
  );
}

export default App;
