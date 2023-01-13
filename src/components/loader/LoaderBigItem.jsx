import React from "react"
import ContentLoader from "react-content-loader"


const LoaderBigItem = (props) => (
    <ContentLoader 
      speed={2}
      width={308}
      height={450}
      viewBox="0 0 312 450"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className={props.className}
      {...props}
    >
      <rect x="6" y="0" rx="0" ry="0" width="100%" height="400" /> 
      <rect x="6" y="410" rx="0" ry="0" width="100%" height="49" />
    </ContentLoader>
  )

export default LoaderBigItem