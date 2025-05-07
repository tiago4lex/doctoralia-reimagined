import { LuEar } from "react-icons/lu";
import "./Header.css";
import logo from "../../assets/doctoralia-logo.png";

function Header() {
  return (
    <header className="doctoralia-header">
      <div className="logo-container">
        <img src={logo} alt="Doctoralia Logo" className="logo-img" />
        <h1 className="logo-text">Doctoralia</h1>
      </div>

      <nav className="main-nav">
        <div className="nav-button orelha">
          <LuEar className="orelha-icon" />
        </div>
        <button className="nav-button">Entrar</button>
        <button className="nav-button primary">Cadastre-se</button>
      </nav>
    </header>
  );
}

export default Header;
