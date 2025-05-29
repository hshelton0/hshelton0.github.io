import * as React from "react"

import Seo from "../components/seo"
import Intro from "../components/intro/intro";
import Switch from "../components/switch/switch";
import "../scss/base.scss"
import "../scss/fonts.scss"
import Experience from "../components/experience/experience";
import FeaturedProjects from "../components/featured-projects/featured-projects";
import Footer from "../components/footer/footer";
import Scroll from "../components/scroll";

const IndexPage = () => (
  <>
    <Scroll />
    <Seo/>
    <Switch />
    <Intro />
    <Experience />
    <FeaturedProjects />
    <Footer />
  </>
)

export default IndexPage
