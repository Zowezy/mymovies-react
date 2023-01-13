import React from "react"
import ContentLoader from "react-content-loader"

const LoaderListItem = (props) => (
<ContentLoader 
    speed={2}
    width={570}
    height={50}
    viewBox="0 0 570 45"
    backgroundColor="#ebeaea"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="410" rx="0" ry="0" width="267" height="49" /> 
    <rect x="0" y="0" rx="0" ry="0" width="570" height="45" />
  </ContentLoader>
  )

export default LoaderListItem