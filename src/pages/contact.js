import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {withScriptjs, withGoogleMap, GoogleMap,Marker} from "react-google-maps"
import { compose, withProps } from "recompose"

const MyMapComponent = compose(
  withProps({
    googleMapURL:  "https://maps.googleapis.com/maps/api/js?key=AIzaSyByVYdAAV-bsEE8Qugi0RrJCn2m_5kMpI4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
}),
withScriptjs,
withGoogleMap
)

(props => (
  <GoogleMap defaultZoom={17} defaultCenter={{ lat: 40.666885, lng: -73.973823}}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 40.666885, lng: -73.973823 }} />
    )}
  </GoogleMap>
));


const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <div id='map'>
      <MyMapComponent isMarkerShown/>
    </div>
    <div id="contactBody">
        <div id="contactInfo">
        <a href="https://www.muzosa.com/contact" target="_blank" >
          <h1>Contact us to try a free class!</h1>
        </a>
        <p>LOCATION:Training takes place from 7:00 pm-9:00 pm at Dance Wave studios 182 4th Ave - Degraw Street</p>
        <p>Take the R train to Union street and walk to Degraw along 4th ave</p>
        <img src={require('../images/647.jpg')} alt="Litchfield villa" className="img-responsive" />
      </div>
    </div>


  </Layout>
)

export default ContactPage
