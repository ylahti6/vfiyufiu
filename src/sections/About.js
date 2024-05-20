import textContent from "../assets/textContent";
function About() {
    const {about, aboutContent} = textContent;
    return (
        <div className="about">
            <p>{about}</p>
            <h4>test</h4>
        </div>
    );
}

export default About;