import React from "react";
import {  graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import ImageList from "../components/imagelist"
//import LightBox from "../components/lightbox"

// eslint-disable-next-line react/prop-types
const MaterialsPagesTemplate = ({ data }) => {
  
    const { content } = data
    //console.log(JSON.stringify(content.edges[0].node.frontmatter.title))

    return (
    <Layout>
      <SEO title="Album Page" />
      
      <div
        className="dangerousHTML"
            dangerouslySetInnerHTML={{
              __html: content.edges[0].node.html
            }}
       />
      
    </Layout>
  );
};

export default MaterialsPagesTemplate;

export const query = graphql`
  query($slug: String!) {
    content:allMarkdownRemark(filter: {frontmatter: {slug: {eq: $slug }}}) {
    edges {
      node {
        frontmatter {
          slug
          title
          keywords
        }
        html
      }
    }
  }
  }
`;
