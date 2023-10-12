import './About.css'
function About() {

    return (
        <>
            <div className="about_header header">
                {/* <p className="heading">#KnowUs</p>
                <p className="subheading">Come and connect with us!</p> */}
            </div>
            <div className="about_container">
                <div className="about_img"></div>
                <div className="about_info">
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Sed, dolorem in consequuntur atque autem omnis nemo excepturi qui blanditiis debitis molestiae velit
                          error quidem animi facere aliquam. Praesentium facilis ut
                           sapiente magnam inventore! Architecto beatae similique ullam
                            necessitatibus facilis facere deleniti unde reiciendis, maxime iste. 
                            A eligendi fugiat, adipisci quas ex soluta dolore repellendus? 
                            Ea impedit exercitationem animi dolorem qui ut consequatur cumque
                             corrupti esse saepe. Tempora, saepe exercitationem. Veniam?
                    </p>
                </div>
            </div>
            <marquee behavior="" direction="">
                FOR MORE INFORMATION OF CREATER OF THIS PAGE PLEASE VISIT <b><a src={"https://github.com/myakalwad25"}>Vijay Myakalwad:github.com/myakalwad25 </a></b>
            </marquee>
            <section className="about-app" >
                <h1>Download out <a href="#">App</a></h1>
                <div class="video">
                    <video autoplay muted loop src={"./Images/about/1.mp4"}></video>
                </div>
            </section>

        </>
    );
}

export default About;