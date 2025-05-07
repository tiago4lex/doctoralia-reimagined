import "./Header.css";

function Header() {
    return (
        <header className="doctoralia-header">
            <h1 className="logo">Doctoralia</h1>
            <nav className="main-nav">
                <button className="nav-button">Entrar</button>
                <button className="nav-button primary">Cadastre-se</button>
            </nav>
        </header>
    )
}

export default Header;