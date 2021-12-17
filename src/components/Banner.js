import React from 'react'
import './Banner.css'

let bannerData = {
    title: "React landing page",
    desc: "Ea id quis commodo irure mollit anim minim cillum qui. Ex occaecat dolore sit laborum mollit fugiat deserunt. Proident enim officia amet veniam. Et labore aliquip laborum occaecat non enim qui adipisicing do anim esse aliqua. Ex cillum magna culpa ad. Consectetur adipisicing ea sunt cillum id fugiat dolore duis magna eiusmod ut laboris ad sit."
}

function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>{bannerData.title}</h1>
                        <p>
                            {bannerData.desc}
                        </p>
                        <a href="#" className="banner-btn">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
