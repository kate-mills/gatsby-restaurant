import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader img={img}>
      <Banner title="contact us" subtitle={`we'd love to hear from you`} />
      <form
        name="contact-us-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="text" />
        <input name="email" placeholder="name@name.com" type="email" />
        <textarea name="message" placeholder="Your Message" />
        <button>Send</button>
      </form>
    </PageHeader>
  </Layout>
)
export default ContactPage
