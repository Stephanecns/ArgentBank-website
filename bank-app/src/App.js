//App.js est le fichier où tu définis l'apparence et le contenu de l'application
import './App.css';
import '../src/styles/main.css';
import Router from './components/Router.js';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer/>
    </div>
  );
}

export default App;
