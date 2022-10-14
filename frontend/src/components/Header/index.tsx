import logo from '../../assets/img/logo33-removebg-preview.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>Sells LookUp</h1>
                <p>
                    Desenvolvido por 
                    <a href="https://instagram.com/manoelbina.02?igshid=YmMyMTA2M2Y="> @manoelbina.02</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
