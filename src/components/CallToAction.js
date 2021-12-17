import React from 'react'
import './CallToAction.css'
import {FiCode} from 'react-icons/fi'

function CallToAction() {
    return (
        <div className="cta-bg">
            <div className="overlay"></div>
            <div className="container">
                <div className="cta-text">
                    <FiCode className="FiCode"/>
                    <h2>We're react dev team</h2>
                    <p>Ea id quis commodo irure mollit anim minim cillum qui. Ex occaecat dolore sit laborum mollit fugiat deserunt. Proident enim officia amet veniam. Et labore aliquip laborum occaecat non enim qui adipisicing do anim esse aliqua. Ex cillum magna culpa ad. Consectetur adipisicing ea sunt cillum id fugiat dolore duis magna eiusmod ut laboris ad sit.</p>
                    <a href="#" className="cta-btn">get to know us</a>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
