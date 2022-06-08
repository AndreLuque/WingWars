import React from "react"

const HomeSliderItem = ({ image }: { image: string }) => {
  return (
    <>
      <img src={image} alt="" className="h-180 w-180 sm:h-250 sm:w-250" />
    </>
  )
}

export default HomeSliderItem
