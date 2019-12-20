import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div id="mainBody">
      <div id="mainBanner">
        <img src={require('../images/aboutTop.jpg')} alt="Punch and evasion" className="img-responsive" />
        <div id="typeContainer">
          <h1>What is BK Muzosa Bujinkan</h1>
          <p>Brooklyn Muzosa Bujikan Dojo embraces the spirit of Budo - an armed and unarmed historical style of Martial Arts that pre dates modern practices such a Judo and Akido. Known as a living art, Bujinkan Budo Taijutsu is applicable within our modern culture.Training in the evenings in all weather, we believe the way of Budo, is to practice it in all situations and in all environments.</p>
          <p><b>LOCATION:Training takes place from 7:00 pm-9:00 pm on the porch and surrounding grounds of Litchfield Villa in Prospect Park </b></p>
        </div>
      </div>
    </div>
    
    <div id="seperate"></div>
    
    <div id="bujinBanner">
      <img src={require('../images/masaaki-hatsumi.jpg')} alt="Soke" className="img-responsive" />
      <div id="typeContainer2">
        <h1>History of the Bujinkan</h1>


          <p>The Bujinkan Dojo was organized in the early 1970's by Masaaki Hatsumi. This organization is comprised of nine distinct schools of ancient Japanese martial arts, with traceable histories from the 9th century and earlier. Hatsumi-sensei inherited these ryuha from his teacher, the late Toshitsugu Takamatsu, in 1972.The Bujinkan Budo Taijutsu system of martial arts emphasizes natural and relaxed body movement. This martial art is comprised of authentic techniques from ancient samurai and ninja combat arts, taught within both their historical contexts as well as within the modern millieu.

          The subtle destruction of the attacker's balance and rhythm and proper control of distance and timing are a primary focus of Bujinkan Budo Taijutsu. These principles allow even smaller persons to overcome larger and more powerful opponents.
             <a href="https://www.muzosa.com/articles" target="_blank" ><h3> <u>See more at our main site</u></h3></a>
           </p>
      </div>
    </div>
  </Layout>
)

export default SecondPage
