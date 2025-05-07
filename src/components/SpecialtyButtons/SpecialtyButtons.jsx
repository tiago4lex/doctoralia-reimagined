import { useEffect, useState } from "react";
import "./SpecialtyButtons.css";

const specialties = [
    'Ginecologista', 'Pediatra', 'Dermatologista', 'Oftalmologista', 'Cardiologista',
    'Ortopedista', 'Endocrinologista', 'Psiquiatra', 'Neurologista', 'Urologista',
    'Gastroenterologista', 'Otorrinolaringologista', 'Reumatologista', 'Oncologista',
    'Pneumologista', 'Infectologista', 'Cirurgião Geral', 'Cirurgião Plástico', 'Cirurgião Cardiovascular',
    'Cirurgião Oncológico', 'Cirurgião Torácico', 'Cirurgião Vascular', 'Cirurgião Pediátrico', 'Cirurgião Colorectal',
    'Cirurgião Maxilofacial', 'Cirurgião de Cabeça e Pescoço', 'Cirurgião de Mão', 'Cirurgião de Trauma', 'Cirurgião de Queimaduras',
    'Cirurgião de Emergência', 'Cirurgião de Transplante', 'Cirurgião de Reconstrução', 'Cirurgião de Endoscopia', 'Cirurgião de Laparoscopia',
];

function SpecialtyButtons() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);
    return (
        <div className={`specialty-buttons-container ${loaded ? "loaded" : ""}`}>
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