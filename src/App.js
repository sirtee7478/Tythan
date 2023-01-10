import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import CentralRouter from './CentralRouter';
import Header from "./components/Header";
import Footer from "./components/Footer";





function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <CentralRouter />
        <Footer />
      </Router>
  </div>
  )
}

export default App;
