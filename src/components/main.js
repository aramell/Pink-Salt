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
        <a
          href="https://www.etsy.com/shop/PinkSaltCreatives?fbclid=IwAR2oUVmfGU7ckFEoDxldCZRv1qW7e1TWRpTUh_dbVB6u0e1QtlD7a38DBn0"
          target="blank"
          style={{
            color: `#8a2219`,
            fontWeight: `normal`,
            marginTop: `10px`,
          }}
        >
          Order Now @ Etsy
        </a>
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
