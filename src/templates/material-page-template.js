import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

// eslint-disable-next-line react/prop-types
const MaterialsPagesTemplate = ({ data }) => {
  const { content } = data;
  //console.log(JSON.stringify(content.edges[0].node.frontmatter.title))

  return (
    <Layout>
      <SEO title="Album Page" />

      <Img
        fluid={content.edges[0].node.featuredImg.childImageSharp.fluid}
        alt={content.edges[0].node.frontmatter.featuredImgAlt}
        className="w-full h-64 mb-16"
      />

      <div
        className="dangerousHTML"
        dangerouslySetInnerHTML={{
          __html: content.edges[0].node.html,
        }}
      />
    </Layout>
  );
};

export default MaterialsPagesTemplate;

export const query = graphql`
  query($slug: String!) {
    content: allMarkdownRemark(
      filter: { frontmatter: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            snippet
            featuredImgUrl
            featuredImgAlt
          }
          html
          featuredImg {
            childImageSharp {
              fluid(
                duotone: { highlight: "#f00e2e", shadow: "#192550", opacity: 75 }
                maxWidth: 1200
                cropFocus: ATTENTION
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
