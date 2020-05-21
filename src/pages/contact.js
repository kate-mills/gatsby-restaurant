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
      <form name="third-contact-us" action="" netlify >
        <input  name="form-name" value="contact" />
        <p hidden><label> Don’t fill this out: <input name="bot-field" /></label></p>
        <p>
          <label> Your name: <br /> <input type="text" name="name" /> </label>
        </p>
        <p>
          <label> Your email: <br /> <input type="email" name="email" /> </label>
        </p>
        <p>
          <label> Message: <br /> <textarea name="message" /> </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Section>
  </Layout>
)
export default ContactPage
