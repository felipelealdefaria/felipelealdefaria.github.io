import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
function SEO({ lang, meta, title }) {
  const metaDescription =
    "Full Stack Web & Mobile Developer - Student Bachelor of Software Engineering. Curious about technologies and entrepreneurship. I work with technology since 2016 and developed websites and applications for different market sectors, working on national and international projects."

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | Personal Website`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${title} | Web & Mobile Developer`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `/images/og-image.jpg`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "Felipe Leal | @lealluisf",
        },
        {
          name: `twitter:title`,
          content: `${title} | Web & Mobile Developer`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
