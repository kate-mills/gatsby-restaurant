import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner, Section } from "../utils"
import img from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader img={img}>
      <Banner title="contact us" subtitle={`we'd love to hear from you`} />
    </PageHeader>
    <Section>
      <div>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input name="name" placeholder="Your Name" type="text" />
          <button> Send</button>
        </form>
      </div>
    </Section>
  </Layout>
)
export default ContactPage
