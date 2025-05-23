import "./FilterSidebar.css";

function FilterSidebar() {
  const filters = [
    "Teleconsulta",
    "Convênios",
    "Datas disponíveis",
    "Bairros",
    "Mais filtros",
  ];

  return (
    <div className="filter-sidebar">
      <h3>Filtros</h3>
      <ul>
        {filters.map((filter) => (
          <li key={filter}>
            <label>
              <input type="checkbox" />
              {filter}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterSidebar;