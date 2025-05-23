function Especialistas() {
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
    // ... outros dias
    { day: "SEGUNDA", date: 20, available: true },
    { day: "SEGUNDA", date: 27, available: false },
  ];

  return (
    <div className="search-resultes-page">
      <h1>Psicólogo, Curitiba</h1>

      <div className="search-results-container">
        <FilterSidebad />

        <div className="results-content">
          <DoctorCard doctor={doctorData} />
          <AvailabilityCalendar availability={availability} />
        </div>
      </div>
    </div>
  );
}

export default Especialistas;
