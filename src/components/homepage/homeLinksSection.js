import React from "react";

import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const homeLinksSection = () => {
  const data = useStaticQuery(graphql`
    query MaterialsQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              title
              snippet
              featuredImgUrl
              featuredImgAlt
            }
            id
            featuredImg {
              childImageSharp {
                fluid(
                  duotone: { highlight: "#3c366b", shadow: "#c3dafe", opacity: 75 }
                  maxWidth: 400
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
  `);

  console.log(data.allMarkdownRemark.edges[0].node.featuredImg.childImageSharp.fluid.src);
  console.log(data.allMarkdownRemark.edges[0].node.frontmatter.featuredImgAlt)

  return (
    <section className="pb-12">
      <div className="lg:text-center pb-6">
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Free Therapy Ideas and Guides
        </h3>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          The best way to find my free content is probably to use the search bar
          at the top of the site. If you’re looking for something specific that
          you can’t find, feel free to ask!
        </p>
      </div>

      <div className="grid grid-cols-3">
        {data.allMarkdownRemark.edges.map((edge) => (
          <Link
            key={edge.node.id}
            to={`/materials/${edge.node.frontmatter.slug}`}
            className="flex flex-col justify-between p-6 rounded-md h-64 max-w-md relative overflow-hidden m-4 shadow-md hover:shadow-xl bg-gray-500 transition-shadow duration-300"
          >
            {/* <img
              className="absolute object-cover top-0 left-0 w-full h-full"
              src={edge.node.frontmatter.featuredImgUrl}
              alt="random image name"
            /> */}

             <Img
              fluid={edge.node.featuredImg.childImageSharp.fluid}
              alt={edge.node.frontmatter.featuredImgAlt}
              className="absolute object-cover top-0 left-0 w-full h-full"
              style={{position: "absolute"}}
            />

            <h3 className="relative text-white text-2xl  font-black leading-tight">
              {edge.node.frontmatter.title}
            </h3>
            <h4 className="relative text-white text-lg fontbold leading-tight">
              {edge.node.frontmatter.snippet}
            </h4>

            <div className="card_bottom relative flex justify-end text-white">
              <div className="flex items-center justify-center px-2 py-1 border border-transparent text-sm font-semibold rounded-md text-indigo-700 bg-indigo-100 focus:outline-none focus:shadow-outline focus:border-indigo-300">
                Learn More
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default homeLinksSection;
