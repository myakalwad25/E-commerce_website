import './Contact.css';
import { AiFillMail } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";

function Contact() {

    return (
        <>
            <div className="contact_header header" >
                <p className="heading">{"#Contact Us"}</p>
                <p className="subheading">{"We are always here for you"}</p>
            </div>
            <section className="contact-details" >
                <div className="info">
                    <span>GET IN TOUCH</span>
                    <h2>visit one of our agency locations or contact us today</h2>
                    <h3>Head Office</h3>
                    <div>
                        <li>
                            <AiFillMail style={{marginRight:"10px"}}/> <p>vijay123@gamil.com</p>
                        </li>
                        <li>
                        <AiFillMail style={{marginRight:"10px"}}/><p>rahul123@gmail.com</p>
                        </li>
                        <li>
                        <AiFillMail style={{marginRight:"10px"}}/><p>rohit123@gmail.com</p>
                        </li>
                        <li>
                        <AiOutlineClockCircle style={{marginRight:"10px"}}/><p>Monday to Saturday: 9 am to 16 pm</p>
                        </li>
                    </div>
                </div>
                <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.898933841425!2d77.2896565251014!3d19.112089182099876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29f0b2e43199%3A0xe11b84ac3144b2b4!2sSGGS%2C%20Vishnupuri%2C%20Nanded%2C%20Maharashtra%20431606!5e0!3m2!1sen!2sin!4v1688064896253!5m2!1sen!2sin" }></iframe>
                
            </section>
            <section className='form_details'>
                    <form action="">
                        <span >LEAVE A MESSAGE</span>
                        <h2 >we love to hear from you </h2>
                        <input type="text" placeholder="Your Name"/>
                        <input type="text" placeholder="E-mail"/>
                        <input type="text" placeholder="Subject"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                        <button className='btn'>Submit</button>
                    </form>
                    <div className="people">
                        <div>
                            <img src="img/people/1.png" alt=""/>
                            <p><span>Vijay Myakalwad : </span> Senior  Manager</p>
                            <p>Phone:+91 9472937430</p> 
                            <p> Email: contact@email.com</p>
                        </div>
                        <div>
                            <img src="img/people/2.png" alt=""/>
                            <p><span>Adha Sharma : </span> Director</p> 
                            <p>Senior Marketing Manager</p>
                            <p>  Phone:+91 9472937430</p> 
                            <p> Email: contact@email.com</p>
                        </div> 
                        <div>
                            <img src="img/people/3.png" alt=""/>
                            <p><span>micheal : </span> Senior Marketing Manager </p> 
                            <p>Phone:+91 9472937430 </p>
                            <p> Email: contact@email.com</p>
                        </div>                     
                    </div>
               
            </section>
        </>
    );
}

export default Contact;