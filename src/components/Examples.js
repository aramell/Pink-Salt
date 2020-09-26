import React from "react"
import Image from "./image"
export const Examples = ({ imageName }) => {
  return (
    <div
      style={{
        border: `5px solid #f09c82`,
        borderRadius: `5px`,
        marginTop: `50px`,
        width: `30% `,
        height: `33%`,
      }}
    >
      <Image imageName={imageName} />
    </div>
  )
}
