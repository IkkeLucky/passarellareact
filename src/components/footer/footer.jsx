import React from 'react'
import logo from '../../images/logodiosapurple.jpg'


const Footer = () => {
  return (
    <div>
      
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

export default Footer
