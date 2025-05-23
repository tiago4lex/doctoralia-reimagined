import "./AvailabilityCalendar.css";

function AvailabilityCalendar({ availability }) {
  const days = ["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA"];

  return (
    <div className="availability-calendar">
      <h3>Horários Disponíveis</h3>

      <div className="calendar-grid">
        {/* Cabeçalho com dias da semana */}
        {days.map((day) => (
          <div key={day} className="calendar-header">
            {day}
          </div>
        ))}

        {/* Dias do mês */}
        {Array.from({ length: 30 }).map((_, index) => {
          const dayIndex = index % 5;
          const day = days[dayIndex];
          const date = index + 1;
          const isAvailable = availability.some(
            (slot) => slot.day === day && slot.date === date && slot.available
          );

          return (
            <div
              key={index}
              className={`calendar-day ${isAvailable ? "available" : ""}`}
            >
              {date}
              {isAvailable && <button className="book-button">AGENDAR</button>}
            </div>
          );
        })}
      </div>

      <div className="teleconsultation-notice">
        <p>Esse especialista tem disponibilidade para teleconsulta</p>
      </div>
    </div>
  );
}

export default AvailabilityCalendar;
