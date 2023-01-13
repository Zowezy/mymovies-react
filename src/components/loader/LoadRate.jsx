import React from "react"
import ContentLoader from "react-content-loader"

const LoadRate = (props) => (
  <ContentLoader 
    speed={2}
    width={1320}
    height={245}
    viewBox="0 0 1320 245"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="0" rx="0" ry="0" width="100%" height="245" />
  </ContentLoader>
)

export default LoadRate