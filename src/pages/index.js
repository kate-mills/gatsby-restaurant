import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="36 blue street - Santa Monica, ca">
        <BannerButton
        style={{margin: '2rem auto'}}>menu</BannerButton>
      </Banner>
    </HomeHeader>
  </Layout>
)
export default IndexPage
