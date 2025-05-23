import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import "./DoctorCard.css";

function DoctorCard() {
  return (
    <div className="doctor-card">
      {/* Seção Superior - Agora com foto ao lado da especialização */}
      <div className="doctor-profile-section">
        <img
          className="profile-picture"
          src="src/components/DoctorCard/medica.jpg"
          alt="medica"
        />

        <div className="doctor-specialty">
          <h2>Psicóloga</h2>
          <p className="registry">CRP PR-34215</p>
          <p className="expertise">Especialista em...</p>
          <p className="expertise-details">
            (Terapia cognitivo comportamental, Terapia do esquema)
          </p>
        </div>
      </div>

      {/* Restante do código permanece igual */}
      <div className="doctor-name-rating">
        <h3>Maria Angelina</h3>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star-filled" />
          ))}
          <span>96 opiniões</span>
        </div>
      </div>

      <div className="doctor-address">
        <FaMapMarkerAlt className="address-icon" />
        <p>
          Rua José Carlos Antonio 2152,
          <br />
          Curitiba - 3685-781
        </p>
      </div>

      <div className="doctor-tabs">
        <button className="tab-active">SERVIÇOS</button>
        <button>OPINIÕES</button>
      </div>

      <div className="divider"></div>

      <div className="bottom-tabs">
        <button className="map-tab">MAPA</button>
        <button>PERFIL</button>
      </div>
    </div>
  );
}

export default DoctorCard;
