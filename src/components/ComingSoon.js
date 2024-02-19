import React from 'react'
import comingSoon from "../Assets/coming-soon.png";

function comingSoon() {
    return (
        <>
            <h1 className="project-heading">
                <img src={comingSoon} width={150} alt=" about" className="img-fluid comingsoon-wave" />
            </h1>
        </>
    )
}

export default comingSoon