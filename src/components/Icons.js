import React from "react"
import { FaEtsy, FaFacebook, FaInstagram } from "react-icons/fa"
import "./icons.css"

export const Icons = () => {
  return (
    <div
      className="icons"
      style={{
        marginTop: `30px`,
        display: `flex`,
        justifyContent: `space-around`,
      }}
    >
      <a
        href="https://www.facebook.com/pinksaltcreatives/"
        target="blank"
        style={{
          color: `#8a2219`,
          fontSize: `1.3em`,
        }}
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.etsy.com/shop/PinkSaltCreatives?fbclid=IwAR2oUVmfGU7ckFEoDxldCZRv1qW7e1TWRpTUh_dbVB6u0e1QtlD7a38DBn0"
        target="blank"
        style={{
          color: `#8a2219`,
          fontSize: `1.3em`,
        }}
      >
        <FaEtsy />
      </a>
      <a
        href="https://www.instagram.com/pinksaltcreatives/"
        target="blank"
        style={{
          color: `#8a2219`,
          fontSize: `1.3em`,
        }}
      >
        <FaInstagram />
      </a>
    </div>
  )
}
