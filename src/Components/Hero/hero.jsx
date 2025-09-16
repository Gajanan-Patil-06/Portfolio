import './hero.css'
export default function Hero(){
    return(
        <div id='home' className="hero">
            <img src="src\assets\MyPhoto.jpg" alt="my Photo" />
            <h1><span>I'm Gajanan Patil ,</span> Frontend Developer  based in India</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati at accusantium repellendus nostrum sed modi molestias laborum, dolorem provident, itaque illum labore accusamus est maiores nihil numquam? Repellat, deleniti.</p>

            <div className='hero-action'>
                <div className="connect-me">Connect me</div>
                <div className="hero-resume">Download Resume</div>
            </div>
        </div>
    )
}