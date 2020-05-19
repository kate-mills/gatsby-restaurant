import React from "react"
import Product from "./Product"
import { useStaticQuery, graphql } from "gatsby"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"

const getProducts = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          name
          price
          id
          ingredients
          textIngredients
          img {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

const Menu = props => {
  console.log("props", props)
  const {
    items: { edges: menuItems },
  } = useStaticQuery(getProducts)
  return (
    <Section>
      <Title title={"featured items"} message={"little taste"} />
      <ProductList>
        {menuItems.map(({ node }) => {
          return <Product key={node.id} node={node} />
        })}
      </ProductList>
      {props.showGoMenuBtn === true ? (
        <Link to="/menu">
          <SectionButton style={{ margin: "2rem auto" }}>Menu</SectionButton>
        </Link>
      ) : (
        false
      )}
    </Section>
  )
}

Menu.defaultProps = {
  showGoMenuBtn: true,
}

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 3rem;

  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`

export default Menu
