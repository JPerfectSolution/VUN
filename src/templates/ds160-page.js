import React from "react"
import PropTypes from 'prop-types'
import SEO from "../components/SEO"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { LayoutContext } from "../components/Layout"

import styles from "./ds160-page.module.scss"
import StartAppBtn from "../components/StartAppBtn";
import PaymentSection from "../components/PaymentSection/PaymentSection";
import MemberSection from "../components/Members";

const Ds160PageTemplate = ({ data }) => {
  const page_data = data.markdownRemark.frontmatter;
  const { headerLeftTheme, headerRightTheme } = page_data;

  return (
    <>
      <SEO
        title={page_data.title}
        description= "" // {page_data.description || page_data.excerpt}
      />

      <LayoutContext.Consumer>
        {({setHeaderLeftTheme, setHeaderRightTheme}) => {
          setHeaderLeftTheme(headerLeftTheme || 'light');
          setHeaderRightTheme(headerRightTheme || 'dark');
        }}
      </LayoutContext.Consumer>

      <div className="container ">
        <div className={styles.HeaderSection}>
          <div className={styles.HeaderContent}>
            <div className={styles.HeaderTitle}>
              {page_data.intro.title}
            </div>
            <div className={styles.HeaderContents}>
              {
                page_data.intro.characters.map((item, index) => (
                  <div className={styles.HeaderItem} key={index}>{item}</div>
                ))
              }
            </div>
            <div className={styles.HeaderStartBtn}>
              {page_data.intro.img ?
                <Img fixed={page_data.intro.img.childImageSharp.fixed} alt="" />
                : null
              }
            </div>
            <div className={styles.HeaderNote}>
              {page_data.intro.note}
            </div>
          </div>
          
          <div className={styles.HeaderImg}>
            {page_data.featured_image ?
              <Img fixed={page_data.featured_image.childImageSharp.fixed} alt="" />
              : null
            }
          </div>          
        </div>
      </div>
      <PaymentSection />

      <MemberSection />

      <div className="container">
        <div className={styles.SpecialSection}>
          <div className={styles.SpecialTitle1}>
            {page_data.special.title1}
          </div>
          <div className={styles.SpecialContent1}>
            {
              page_data.special.content1.map((item, index) => (
                <div className={styles.SpecialContent1Item} key={index}>{item}</div>
              ))
            }
          </div>
          <div className={styles.SpecialTitle2}>
            {page_data.special.title2}
          </div>
          <div className={styles.SpecialContent2}>
            { page_data.special.content2 }
          </div>
          <div className={styles.ShowMore}>
            <Link to="/">Show More > </Link>
          </div>
        </div>
      </div>
    </>
  )
}
Ds160PageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
export default Ds160PageTemplate

