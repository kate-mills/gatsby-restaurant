import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/menuBcg.jpeg"
import Menu from "../components/HomePageComponents/Menu"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <PageHeader img={img}>
      <Banner title="our menu" subtitle={`let's dig in`} />
    </PageHeader>
    <Menu showGoMenuBtn={false} />
  </Layout>
)
export default MenuPage
