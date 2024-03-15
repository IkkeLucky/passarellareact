import React from 'react'


const mapTitle = "find a place to eat nearby";
const Contact = () => {
  return (
    <div>
      
    <section id="pageHeader" class="contactHeader">
        <h2>PassarrellaDiosa</h2>
        <p>Lets talk! Leave us a message</p>
    </section>

    <section id="contactDetails" class="sectionp1">
        <div class="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our locations or contact us today</h2>
            <h3>Head Office</h3>

            <li>
                <i class="fa-solid fa-map"></i>
                <p>Hohe Bleichen 8, 20354 Hamburg</p>
            </li>
            <li>
                <i class="fab fa-instagram"></i>
                <a href="https://www.instagram.com/ladiosashop_soytudiosa/" >Follow us on Instagram</a>
            </li>
            <li>
                <i class="fa-solid fa-phone"></i>
                <a href="https://wa.me/4915753206358">Only Whatsapp Messages</a>
            </li>
            <li>
                <i class="fa-regular fa-clock"></i>
                <p>Monday to Saturday: 9.00am to 16.00pm</p>
            </li>
            <li>
                <i class="fa-solid fa-network-wired"></i>
                <a href="https://www.ubc-collection.com/en/hamburg/conference-rooms/#c17484" >Our Cowork</a>
            </li>
        </div>



        <iframe
      title={mapTitle}
      width="600"
      height="450"
      loading="lazy"
      allowFullScreen
      Border="0"
      src="https://maps.app.goo.gl/ihqMXKjfBVb2eBo58"
    ></iframe>

    </section>

    </div>
  )
}

export default Contact
