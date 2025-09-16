import './contact.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "02c0e4da-b6b4-48b0-b4a1-f37a9ff80da3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            event.target.reset();
        } else {
            console.log("Error", data);

        }
    };
    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-page">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Have a project in mind or just want to say hello?
                        Feel free to reach out—I’d love to connect!.</p>
                    <div className="email"><div><EmailIcon /></div><div>gujargp77@gmail.com</div></div>
                    <div className="contact-no"><div><LocalPhoneIcon /></div><div>7410752114</div></div>
                    <div className="location"><div><LocationOnIcon /></div><div>Pune, India</div></div>
                </div>

                <div className="contact-right">

                    <form onSubmit={onSubmit}>

                        <label htmlFor="name">Your Name</label>
                        <input type="text" placeholder="Enter your name" id="name" name='name' />

                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your email" id="email" name='email' />

                        <label htmlFor="message">Write your message here</label>
                        <textarea name="message" id="message" placeholder="Enter your message"></textarea>

                        <button>Submit now</button>

                    </form>


                </div>
            </div>

        </div>
    )
}