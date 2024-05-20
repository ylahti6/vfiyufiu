import Time from "./Time";
import textContent from "../assets/textContent";

function Navigator () {
    const {yannick, projects, about, contact} = textContent;
    // const x = document.getElementById("myLinks");
    // if (x.style.display === "block") {
    //     x.style.display = "none";
    // }
    // else {
    //     x.style.display = "block";
    // }

    return (
        <nav>
            <ul>
                <li>{yannick}</li>
                {/* <li>{projects}</li>
                <li>{about}</li>
                <li>{contact}</li> */}
                <li><Time /></li>
            </ul>
        </nav>
    );
}

export default Navigator;