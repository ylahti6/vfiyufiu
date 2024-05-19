import React from "react";
import Time from "./Time";
function Navigator () {
    return (
        <nav>
            <ul>
                <li><a href="#">yannick.</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contacts</a></li>
                <li><Time /></li>
            </ul>
        </nav>
    );
}

export default Navigator;