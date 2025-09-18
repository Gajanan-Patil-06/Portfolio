import './hero.css'
import MyPhoto from "../../assets/MyPhoto.jpg"
export default function Hero(){
    return(
        <div id='home' className="hero">
            <img src={MyPhoto} alt="my Photo" />
            <h1><span>I'm Gajanan Patil ,</span> Frontend Developer  based in India</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati at accusantium repellendus nostrum sed modi molestias laborum, dolorem provident, itaque illum labore accusamus est maiores nihil numquam? Repellat.</p>

            <div className='hero-action'>
                <div className="connect-me">Connect me</div>
                <div className="hero-resume">Download Resume</div>
            </div>
        </div>
    )
}