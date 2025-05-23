import "./SpecialtyButtons.css";

const specialties = [
    'Ginecologista', 'Pediatra', 'Dermatologista', 'Oftalmologista', 'Cardiologista',
    'Ortopedista', 'Endocrinologista', 'Psiquiatra', 'Neurologista', 'Urologista',
    'Gastroenterologista', 'Otorrinolaringologista', 'Reumatologista', 'Oncologista',
    'Pneumologista', 'Infectologista', 'Cirurgião Geral', 'Cirurgião Plástico', 'Cirurgião Cardiovascular',
    'Cirurgião Oncológico', 'Cirurgião Torácico', 'Cirurgião Vascular', 'Cirurgião Pediátrico'
]

function SpecialtyButtons() {
    return (
        <div className="specialty-buttons-container">
            {specialties.map((specialty, index) => (
                <button
                    key={index}
                    className={`specialty-button ${specialty === 'Ginecologista' ? 'highlighted' : ''}`}
                >
                    {specialty}
                </button>
            ))}
        </div>
    );
}

export default SpecialtyButtons;