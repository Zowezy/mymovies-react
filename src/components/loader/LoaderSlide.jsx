import React from "react"
import ContentLoader from "react-content-loader"

const LoaderSlide = (props) => (
<ContentLoader 
    speed={5}
    width={216}
    height={320}
    viewBox="0 0 220 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className={props.className}
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="210" height="320" />
  </ContentLoader>
  )

export default LoaderSlide