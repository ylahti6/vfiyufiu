import textContent from '../assets/textContent';
import '../styles/global.css';

const { name, role, intro } = textContent; 

function Header() {
  return (
    <div className="App">
      <h1>{name}</h1>
      <h3>{role}</h3>
      <p>{intro}</p>
    </div>
  );
}

export default Header;
