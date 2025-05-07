import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGlassdoor } from "react-icons/si";
import footerLogo from "../../assets/footer-logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={footerLogo} alt="Doctoralia Footer Logo" />
        </div>

        <div className="footer-address">
          <h3>Doctoralia Brasil Serviços Online e Software Ltda</h3>
          <p>Rua Visconde do Rio Branco, 1448 - 2º andar - Batel</p>
          <p>80420-210 Curitiba (Paraná), Brasil</p>
        </div>

        <div className="footer-social">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com/doctoralia.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://instagram.com/doctoralia_br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://linkedin/company/doctoralia-brasil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://www.glassdoor.com/Overview/Working-at-DocPlanner-EI_IE1071394.11,21.htm "
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGlassdoor className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
