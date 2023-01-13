import React from "react"
import ContentLoader from "react-content-loader"


const LoaderBlockList = (props) => (
  <ContentLoader 
    speed={2}
    width={310}
    height={165}
    viewBox="0 0 310 165"
    backgroundColor="#ebeaea"
    foregroundColor="#ecebeb"
    className="list col-lg-3"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="310" height="165" />
  </ContentLoader>
)

export default LoaderBlockList