import textContent from '../assets/textContent';
import '../styles/global.css';
import { BiSolidCircle } from 'react-icons/bi';


function Header() {
  
  const { frontend, figma, mongodb, express, role, intro } = textContent; 

  return (
    <div className="header">
      <h1>{role}</h1>
        <span><BiSolidCircle className='dot'/>{figma}</span>
      <p>{intro}</p>
    </div>
  );
}

export default Header;
