import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="mainBody">
      <div id="mainBanner">
        <Link
        to="/page-2/">
          <img src={require('../images/about.jpg')} alt="jumbotron" className="img-responsive" />
        </Link>
      </div>

      
    </div> 
  </Layout>
)

export default IndexPage
