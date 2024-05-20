import '../styles/global.css';

// --- IMPORTING TEXT CONTENT
import textContent from '../assets/textContent';

// --- REACT ICONS
import { BiSolidCircle } from 'react-icons/bi';

function Header() {
  const { frontend, figma, mongodb, express, role, intro } = textContent; 

  return (
    <div className="header">
      <h1>{role}</h1>
      <div className='auto-flick'>
        <BiSolidCircle className='dot'/>{figma}
      </div>
      {/* <p>{intro}</p> */}
    </div>
  );
}

export default Header;
