import React from 'react'
import { IMG_URL } from "../utils/constants";

const ImageDiv = ({dest}) => {
  return (
    <div className="mb-6 mx-14">
        <img
          className="w-96"
          src={dest}
          alt=""
        />
      </div>
  )
}

export default ImageDiv
