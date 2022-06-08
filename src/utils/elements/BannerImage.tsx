import Banner from "assets/img/banner.webp"
import BannerMobile from "assets/img/banner_mobile.png"
import React from "react"

const BannerImage = ({
  desktop,
  free
}: {
  desktop?: boolean
  free?: boolean
}) => {
  return (
    <>
      <div
        className={`relative -mx-20 flex w-screen sm:-mx-30 lg:mx-0 lg:w-full ${
          free ? "mt-40" : ""
        } ${!free && !desktop ? "sm:aspect-w-16 sm:aspect-h-8" : ""}`}
      >
        <div
          className={`relative w-full ${free ? "flex items-end" : "h-full"}`}
        >
          <img
            src={Banner}
            alt=""
            className={`hidden h-auto w-screen sm:flex ${
              desktop
                ? "max-w-full"
                : "absolute bottom-[0%] left-[50%] max-w-[1920px] translate-x-[-50%] transform"
            }`}
          />
          <img
            src={BannerMobile}
            alt=""
            className={`flex h-auto w-screen max-w-[100vw] sm:hidden ${
              free ? "" : "absolute bottom-0 left-0"
            }`}
          />
          <div className="absolute left-[50%] bottom-0 h-100 w-screen translate-x-[-50%] transform bg-gradient-to-t from-grey to-transparent"></div>
        </div>
      </div>
    </>
  )
}

export default BannerImage
