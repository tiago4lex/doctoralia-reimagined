import { useState } from "react";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import AvailabilityCalendar from "../components/AvailabilityCalendar/AvailabilityCalendar";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import "./Especialistas.css";

function SearchResults() {
  const [activeTab, setActiveTab] = useState("PERFIL");

  const doctorData = {
    name: "Maria Angelina",
    specialty: "Psicóloga",
    registry: "CRP PR-34215",
    expertise: "Terapia cognitivo comportamental, Terapia do esquema",
    rating: 5,
    reviews: 86,
    address: "Rua José Carlos Antonio 2152, Curitiba - 3685-781",
    acceptsTeleconsultation: true,
  };

  const availability = [
    { day: "QUARTA", date: 1, available: true },
    { day: "SEGUNDA", date: 6, available: false },
    { day: "SEGUNDA", date: 20, available: true },
    { day: "SEGUNDA", date: 27, available: false },
  ];

  return (
    <div className="search-results-page">
      <header className="search-header">
        <h1>Psicólogo, Curitiba</h1>
        <FilterSidebar />
      </header>

      <div className="results-container">
        <div className="doctor-section">
          <DoctorCard
            doctor={doctorData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <div className="calendar-section">
          <AvailabilityCalendar availability={availability} />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
