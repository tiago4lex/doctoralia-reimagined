import { FaStar, FaMapMarkerAlt, FaVideo } from "react-icons/fa";
import "./DoctorCard.css";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <div className="doctor-header">
        <h2>{doctor.name}</h2>
        <div className="doctor-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < doctor.rating ? "star-filled" : "star-empty"}
            />
          ))}
          <span>({doctor.reviews} opiniões)</span>
        </div>
      </div>

      <div className="doctor-specialty">
        <h3>{doctor.specialty}</h3>
        <p>{doctor.registry}</p>
      </div>

      <p className="doctor-expertise">{doctor.expertise}</p>

      <div className="doctor-address">
        <FaMapMarkerAlt />
        <p>{doctor.address}</p>
      </div>

      {doctor.acceptsTeleconsultation && (
        <div className="teleconsultation-badge">
          <FaVideo />
          <span>Teleconsulta disponível</span>
        </div>
      )}

      <div className="doctor-tabs">
        <button className="tab-active">PERFIL</button>
        <button>SERVIÇOS</button>
        <button>OPINIÕES</button>
      </div>
    </div>
  );
}

export default DoctorCard;
