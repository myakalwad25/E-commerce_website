import '../App.css';

function Footer() {
    return (
        <>
            <section className="newsletter">
                <div className="newstext">
                    <span><h2>Sign Up For Newletters</h2></span>
                    <p>Get E-mail updates about out latest shop and <span>spacial offers.</span></p>
                </div>
                <div className="form">
                    <input type="text" id="tex_input" placeholder="Your email address"/>
                    <button>Sign Up</button>
                </div>

            </section>
            <div className="footer">
                <div className="col">
                    
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> 321 Vishnupuri Nanded 431606</p>
                    <p><strong>Phone:</strong> (+91) 9975140790</p>
                    <p><strong>Hours:</strong>10:00 -18:00,mon-sat</p>
                    <div className="follow">
                        <h4>follow us</h4>
                        <div className="icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-youtube"></i>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="">About us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & conditions</a>
                    <a href="#">Contact us</a>
                </div>
                <div className="col">
                    <h4>My account</h4>
                    <a href="">Sign in</a>
                    <a href="#">view cart </a>
                    <a href="#"> my  wishlist</a>
                    <a href="#">Trac my order</a>
                    <a href="#">help </a>
                </div>
                
            </div>
    </>
    );
}

export default Footer;