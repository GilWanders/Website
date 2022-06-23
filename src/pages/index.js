import * as React from "react"
import { Link } from "gatsby"
import { MdPhotoCamera, MdOutlineMusicNote } from "react-icons/md";

import Layout from "../components/layout"
import Seo from "../components/seo"
import './index.css';

const IndexPage = () => (
  <Layout>
    <Seo title="Gil Wanders - Portfolio" />
    <div id="main-content" className="content-container">
      <Link to="photography">
        <div className="content-card">
          <MdPhotoCamera />
        </div>
      </Link>

      <Link to="photography">
        <div className="content-card">
          <MdOutlineMusicNote />
        </div>
      </Link>
    </div>
  </Layout>
)

export default IndexPage
