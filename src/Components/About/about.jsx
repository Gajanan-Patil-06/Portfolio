import './about.css'
export default function About() {
    return (
        <div id='about' className="about">

            <div className="about-title">
                <h1>About</h1>
            </div>

            <div className="about-section">
                <div className="about-left">
                    <img src="src\assets\MyPhoto.jpg" alt="My photo" width={400}  height={400}/>
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a passionate frontend developer focused on building clean, responsive, and user-friendly interfaces. With strong skills in HTML, CSS, JavaScript, and frameworks like React (or Vue/Angular), I enjoy turning ideas into visually appealing, high-performance websites. I’m detail-oriented, always learning, and love creating seamless digital experiences that users enjoy</p>
                    </div>

                    
                        <div className="about-skills">
                            <div className='about-skill'><p>HTML</p><hr style={{ width: "50%",}} /></div>
                            <div className="about-skill"><p>CSS</p><hr style={{ width: "40%",}} /></div>
                            <div className="about-skill"><p>Javascript</p><hr style={{ width: "45%",}} /></div>
                            <div className="about-skill"><p>React.js</p><hr style={{ width: "35%",}} /></div>

                        </div>
                </div>

            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEAR OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>COMPLETE PROJECT</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>


        </div>
    )


}