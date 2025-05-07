import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Especialistas from "./pages/Especialistas";
import Consultas from "./pages/Consultas";
import Perfil from "./pages/Perfil";
import Avaliacoes from "./pages/Avaliacoes";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especialistas" element={<Especialistas />} />
        <Route path="/consultas" element={<Consultas />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
