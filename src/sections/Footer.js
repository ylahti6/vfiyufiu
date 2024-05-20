import textContent from "../assets/textContent";
import '../styles/global.css';

function Footer() {
    const { logo, mark } = textContent;
    return (
        <div className="footer">
            <h1>{logo}</h1>
        </div>
    );
}

export default Footer;