import React, { useEffect, useState } from "react"
import SEO from "../components/seo"
import Header from "../components/Header/Header.js"
import Main from "../components/Main/Main.js"
import AboutMe from "../components/AboutMe/AboutMe.js"
import WorkSkills from "../components/WorkSkills/WorkSkills.js"
import Contact from "../components/Contact/Contact.js"
import { LoadingOutlined } from "@ant-design/icons"

const IndexPage = () => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setRender(true)
    }, 1000)
  }, [])

  return (
    <>
      {render ? (
        <div
          style={{
            paddingRight: "12px",
            paddingLeft: "12px",
          }}
        >
          <SEO title="Felipe Leal" />
          <Header />
          <Main />
          <AboutMe />
          <WorkSkills />
          <Contact />
        </div>
      ) : (
        <div className="initialRender">
          <LoadingOutlined style={{ color: "#9177ff", fontSize: 50 }} />
        </div>
      )}
    </>
  )
}

export default IndexPage
