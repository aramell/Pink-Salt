import React from "react"
import Image from "./image"
import { Icons } from "./Icons"
import { Examples } from "./Examples"
import { logoColor } from "./imageConstants"

export const Main = () => {
  return (
    <>
      <div className="box">
        <Image imageName={logoColor} />
        Coming Soon!
        <Icons />
      </div>
      <div className="examples">
        <Examples imageName="skeletons" />
        <Examples imageName="avacados" />
        <Examples imageName="market" />
      </div>
    </>
  )
}
