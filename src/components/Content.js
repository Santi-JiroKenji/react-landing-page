import React from 'react'
import './Content.css'
import content1 from "../assets/images/content1.jpg";
import content2 from "../assets/images/content2.jpg";
import content3 from "../assets/images/content3.jpg";

function Content() {
    return (
        <div className="container">
            <section className="content-con">
                <div className="content-l">
                    <img src={content1} alt=""/>
                </div>
                <div className="content-r">
                    <h2>Some Title</h2>
                    <p>
                        Ea id quis commodo irure mollit anim minim cillum qui. Ex occaecat dolore sit laborum mollit fugiat deserunt. Proident enim officia amet veniam. Et labore aliquip laborum occaecat non enim qui adipisicing do anim esse aliqua. 
                    </p>
                </div>
            </section>
            <section className="content-con">
                <div className="content-r">
                    <h2>Some Title</h2>
                    <p>
                        Ea id quis commodo irure mollit anim minim cillum qui. Ex occaecat dolore sit laborum mollit fugiat deserunt. Proident enim officia amet veniam. Et labore aliquip laborum occaecat non enim qui adipisicing do anim esse aliqua. 
                    </p>
                </div>
                <div className="content-l">
                    <img src={content2} alt=""/>
                </div>
            </section>
            <section className="content-con">
                <div className="content-l">
                    <img src={content3} alt=""/>
                </div>
                <div className="content-r">
                    <h2>Some Title</h2>
                    <p>
                        Ea id quis commodo irure mollit anim minim cillum qui. Ex occaecat dolore sit laborum mollit fugiat deserunt. Proident enim officia amet veniam. Et labore aliquip laborum occaecat non enim qui adipisicing do anim esse aliqua.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Content
