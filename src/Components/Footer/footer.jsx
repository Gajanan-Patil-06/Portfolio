import './footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-page">
                <div className="left">
                    <div className="title">
                        <h1>Gajanan</h1>
                    </div>

                    <div className="para">
                        <p>Designed & developed by <span>Gajanan Patil ,</span> Frontend Developer — Crafting clean, responsive interfaces.</p>
                    </div>

                </div>

                <div className="right">
                    <input type="text" placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>

            </div>

            <hr />

            <div className="last">

                <div className="lastLeft">
                    <p>2025 Development.All right reserved</p>

                </div>

                <div className="lastRight">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>

            </div>


        </div>
    )
}