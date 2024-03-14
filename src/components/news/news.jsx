import React from 'react'
import logo from '../../images/logodiosapurple.jpg'
import diosa1 from '../../images/diosa1.webp'

const News = () => {
  return (
    <div>
    <section id="pageHeader" class="blogHeader">
        <h2>PassarrellaDiosa</h2>
        <p>Learn about different Diosas</p>
    </section>



    <section id="blog">

        <div class="blogBox">
            <div class="blogImage">
                <img src="img/ladiosa12.jpg" alt=""/>
            </div>
            <div class="blogDetails">
                <h4>How DIOSA was born</h4>
                <p>The beginning. The story of SARAH NATHALIE FELICIANI</p>
                <a href="https://www.tophatmagazine.es/2023/02/01/sarah-nathalie-feliciani/" target="noopener noreferrer">CONTINUE READING</a>
            </div>
            <h1>03/23</h1>
        </div>
        <div class="blogBox">
            <div class="blogImage">
                <img src={diosa1} alt=""/>
            </div>
            <div class="blogDetails">
                <h4>Hispania LA Messe</h4>
                <p>Feria de negocios para empresari@s & emprendedores(as)</p>
                <a href="https://www.eventbrite.de/e/hispania-la-messe-feria-de-negocios-para-empresaris-emprendedoresas-tickets-574304098017" target="noopener noreferrer">CONTINUE READING</a>
            </div>
            <h1>03/23</h1>
        </div>
        <div class="blogBox">
            <div class="blogImage">
                <img src="img/blog4.png" alt=""/>
            </div>
            <div class="blogDetails">
                <h4>17 fashion items that made 2021</h4>
                <p>What fashion items are we buying and taking in 2021 and what does it says about where the industry is headed? In uncertain times, why are we buying?</p>
                <a href="https://www.vogue.mx/moda/articulo/17-articulos-de-moda-que-definieron-el-ano-2021" target="noopener noreferrer">CONTINUE READING</a>
            </div>
            <h1>11/21</h1>
        </div>
        <div class="blogBox">
            <div class="blogImage">
                <img src="img/blog1.png" alt=""/>
            </div>
            <div class="blogDetails">
                <h4>How clothing can make you feel better... or not</h4>
                <p>Fashion psychology, dressing and attitude. The study about how color, image, style and beauty affect the human behaviour, whilst taking on cultural norms and sensitivity.</p>
                <a href="https://www.nytimes.com/es/2018/05/08/espanol/cultura/psicologia-moda-dawnn-karen.html" target="noopener noreferrer">CONTINUE READING</a>
            </div>
            <h1>05/18</h1>
        </div>
        <div class="blogBox">
            <div class="blogImage">
                <img src="img/blog2.png" alt=""/>
            </div>
            <div class="blogDetails">
                <h4>From designer to store</h4>
                <p>Quick tour on how does each of our loved clothes are made from scratch. Design on paper, canvas creation, quality control and arrival to stores.</p>
                <a href="https://medium.com/@julia_81739/del-dise%C3%B1o-a-la-prenda-7e06e897ef34" target="noopener noreferrer">CONTINUE READING</a>
            </div>
            <h1>09/16</h1>
        </div>
        <div class="blogBox">
            <div class="blogImage">
                <img src="img/blog3.png" alt=""/>
            </div>
            <div class="blogDetails">
                <h4>Is new York the hub of fashion?</h4>
                <p>Four cities defined today under the title "fashion hubs", assemble the designers with each and one of their collections which dictate new parameters. New York, Milan, London, Paris and reciently Tokio, thanks to their revolutionary proposals determine the future for this powerful industry.</p>
                <a href="https://medium.com/@Tess843/ki-216c9b973ef9" target="noopener noreferrer">CONTINUE READING</a>
            </div>
            <h1>10/14</h1>
        </div>
    </section>


    <footer class="sectionp1">
        <div class="col">
            <img src={logo} height="180px" width="180px" alt="" class="logo"/>
            <h4>Contact</h4>
            <p><strong>Address: </strong>Hohe Bleichen 8, 20354 Hamburg</p>
            <p><strong>Phone: </strong><a href="https://wa.me/4915753206358">Only Whatsapp Messages</a></p>
            <p><strong>Hours: </strong>10:00 - 18:00, Mon - Sat</p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon2">
                    <a href="https://www.instagram.com/ladiosashop_soytudiosa/"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/LADIOSASHOPSOYTUDIOSA?mibextid=LQQJ4d"><i class="fab fa-facebook-f"></i></a>
                    <a href="/"><i class="fab fa-twitter"></i></a>
                    <a href="/"><i class="fab fa-pinterest-p"></i></a>
                    <a href="/"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>

        <div class="col">
            <h4>About</h4>
            <a href="/">About us</a>
            <a href="/">Delivery Information</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Contact Us</a>
        </div>

        <div class="col">
        <h4>My Account</h4>
        <a href="/">Sign In</a>
        <a href="/">View Cart</a>
        <a href="/">My Wishlist</a>
        <a href="/">Track My Order</a>
        <a href="/">Help</a>
        </div>

        <div class="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div class="row">
                <img src="img/pay/app.jpg" alt=""/>
                <img src="img/pay/play.jpg" alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src="img/pay/pay.png" alt=""/>
        </div>

        <div class="copyright">
            <p>2022, Ikkelucky - HTML CSS JS Ecommerce Diosa</p>
        </div>
    </footer>

    
</div>

)
}

export default News
