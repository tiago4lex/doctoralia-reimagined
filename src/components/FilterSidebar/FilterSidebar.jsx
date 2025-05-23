import { FaFilter, FaTimes } from "react-icons/fa";
import "./FilterSidebar.css";

function FilterSidebar() {
  const filters = [
    { id: 1, name: "Teleconsulta", active: true },
    { id: 2, name: "Convênios", active: false },
    { id: 3, name: "Datas disponíveis", active: false },
    { id: 4, name: "Bairros", active: false },
    { id: 5, name: "Mais filtros", active: false },
  ];

  return (
    <div className="filter-container">
      <div className="filter-header">
        <FaFilter className="filter-icon" />
        <h3>Filtrar por</h3>
      </div>

      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-button ${filter.active ? "active" : ""}`}
          >
            {filter.name}
            {filter.active && <FaTimes className="close-icon" />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterSidebar;
