import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Main } from '../components/main'
import '../components/layout.css'

const IndexPage = () => (
  <div className="background">
  <Layout>
    <SEO title="Home" />
      <Main />
  </Layout>
  </div>
)

export default IndexPage
