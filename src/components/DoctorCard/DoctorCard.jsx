import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import "./DoctorCard.css";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      {/* Seção Superior */}
      <div className="doctor-specialty">
        <h2>Psicóloga</h2>
        <p className="registry">CRP PR-34215</p>
        <p className="expertise">Especialista em...</p>
        <p className="expertise-details">
          (Terapia cognitivo comportamental, Terapia do esquema)
        </p>
      </div>

      {/* Nome e Avaliação */}
      <div className="doctor-name-rating">
        <h3>Maria Angelina</h3>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star-filled" />
          ))}
          <span>96 opiniões</span>
        </div>
      </div>

      {/* Endereço */}
      <div className="doctor-address">
        <FaMapMarkerAlt className="address-icon" />
        <p>
          Rua José Carlos Antonio 2152,
          <br />
          Curitiba - 3685-781
        </p>
      </div>

      {/* Abas */}
      <div className="doctor-tabs">
        <button className="tab-active">SERVIÇOS</button>
        <button>OPINIÕES</button>
      </div>

      {/* Divisor */}
      <div className="divider"></div>

      {/* Mapa/Perfil */}
      <div className="bottom-tabs">
        <button className="map-tab">MAPA</button>
        <button>PERFIL</button>
      </div>
    </div>
  );
}

export default DoctorCard;
