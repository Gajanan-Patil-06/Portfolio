import './services.css';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
export default function Services() {
    return (
        <div id='services' className="services-bar">

            <div className="service-title">
                <h1>Services</h1>
            </div>

            <div className="services">

                <div className="upper-services">
                    <div className="service">
                        <h1>01</h1>
                        <p className="P-Title">Web Design</p>
                        <p className='information'>Web Design Services include creating visually appealing, user-friendly, and responsive websites that align with a brand’s goals. Services typically cover</p>
                        <div className='button'>Read me <span><ArrowCircleRightOutlinedIcon /></span></div>
                    </div>
                    <div className="service">
                        <h1>02</h1>
                        <p className="P-Title">Responsive Design</p>
                        <p className='information'>Responsive Design ensures a website looks and works great on all devices—desktops, tablets, and smartphones.</p>
                        <div className='button'> Read me <span><ArrowCircleRightOutlinedIcon /></span></div>
                    </div>
                    <div className="service">
                        <h1>03</h1>
                        <p className="P-Title">Creative Interactive</p>
                        <p className='information'>Creative Interactive refers to web elements and designs that actively engage users through animations, transitions, hover effects, scroll-based actions, and multimedia content</p>
                        <div className='button'>Read me <span><ArrowCircleRightOutlinedIcon /></span></div>
                    </div>
                </div>
                <div className="lower-services">
                    <div className="service">
                        <h1>04</h1>
                        <p className="P-Title">API Integration</p>
                        <p className='information'>API Integration connects your website or app with third-party services (like payment gateways, CRMs, or social media) to enable seamless data exchange and added functionality.</p>
                        <div className='button'> Read me<span><ArrowCircleRightOutlinedIcon /></span></div>
                    </div>
                    <div className="service">
                        <h1>05</h1>
                        <p className="P-Title">Handling Validation</p>
                        <p className='information'>Handling Validation ensures that user inputs (like forms, logins, or checkouts) are accurate, complete, and secure before processing.</p>
                        <div className='button'>Read me <span><ArrowCircleRightOutlinedIcon /></span></div>
                    </div>
                    <div className="service">
                        <h1>06</h1>
                        <p className="P-Title">Package Management</p>
                        <p className='information'>Package Management is the process of using tools (like npm, Yarn, or Composer) to install, update, and manage libraries or dependencies in a web development project.</p>
                        <div className='button'>Read me <span><ArrowCircleRightOutlinedIcon /></span></div>
                    </div>
                </div>

            </div>



        </div>
    )
}