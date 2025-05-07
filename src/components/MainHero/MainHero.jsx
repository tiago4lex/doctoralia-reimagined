import { FaSearch, FaCalendarAlt, FaUser, FaStar } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./MainHero.css";

function MainHero() {
  const navigate = useNavigate();

  const features = [
    { icon: <HiUserGroup />, title: "ENCONTRE ESPECIALISTAS" },
    { icon: <FaCalendarAlt />, title: "MARQUE CONSULTAS" },
    { icon: <FaUser />, title: "ACESSAR PERFIL" },
    { icon: <FaStar />, title: "AVALIE O SERVIÇO" },
  ];

  const handleFeatureClick = (feature) => {
    switch (feature) {
      case "ENCONTRE ESPECIALISTAS":
        navigate("/especialistas");
        break;
      case "MARQUE CONSULTAS":
        navigate("/consultas");
        break;
      case "ACESSAR PERFIL":
        navigate("/perfil");
        break;
      case "AVALIE O SERVIÇO":
        navigate("/avaliacoes");
        break;
      default:
        break;
    }
  };

  return (
    <section className="main-hero">
      <div className="hero-content">
        <div className="features-row">
          {features.map((feature, index) => (
            <button
              key={index}
              className="feature-button"
              onClick={() => handleFeatureClick(feature.title)}
            >
              <div className="feature-icon">{feature.icon}</div>
              <span>{feature.title}</span>
            </button>
          ))}
        </div>

        <div className="search-section">
          <h3 className="search-title">Oque você precisa?</h3>
          <div className="search-input-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar especialista, clínicas, doenças..."
              className="search-input"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHero;