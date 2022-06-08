import { ReactComponent as OpenSea } from "assets/img/opensea.svg"
import Shadow from "assets/img/shadow.png"
import { SOCIAL } from "libs/constants"
import { openLink } from "libs/functions"
import React from "react"
import BannerImage from "utils/elements/BannerImage"

const HomeTop = () => {
  return (
    <>
      <div
        id="#home"
        className="relative grid w-full grid-cols-1 pt-[120px] sm:min-h-[100vh] sm:pt-[130px] xl:pt-[140px]"
      >
        <div className="absolute top-0 bottom-0 left-[50%] w-screen translate-x-[-50%] transform bg-gradient-to-r from-blue to-red"></div>
        <div className="relative grid w-full grid-cols-1">
          <div className="z-20 flex w-full items-start justify-center">
            <div className="grid w-[640px] max-w-full grid-cols-1">
              <div className="mb-16 w-full text-center text-24 font-black leading-[110%] text-white sm:mb-30 sm:text-[48px] md:text-[64px]">
                The Rise of the Birds
              </div>
              <div className="flex w-full justify-center">
                <div className="mb-20 w-[530px] max-w-full text-center text-14 text-white-60 sm:mb-30 sm:text-16">
                  Chickens and Pigeons vie for the absolute control of the
                  planet, and the title of the deadliest beasts.
                </div>
              </div>
              <div className="flex w-full justify-center">
                <div className="grid w-[124px] max-w-full grid-cols-1 gap-12 sm:w-[240px] sm:gap-24">
                  <button
                    name="Connect"
                    onClick={(e) => openLink(e, SOCIAL.OPENSEA)}
                    className="flex h-[56px] items-center justify-center gap-12 rounded-full bg-red sm:px-28"
                  >
                    <div className="flex h-22 w-22 items-center justify-center rounded-full bg-white">
                      <OpenSea className="h-14 w-14 fill-current text-red" />
                    </div>
                    <span className="hidden text-14 font-bold text-white sm:flex md:text-18">
                      Visit on OpenSea
                    </span>
                  </button>
                  {/* <button
                    name="Discord"
                    onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                    className="flex h-[56px] items-center justify-center gap-12 rounded-full bg-blue sm:px-28"
                  >
                    <FaDiscord className="text-white" />
                    <span className="hidden text-14 font-bold text-white sm:flex md:text-18">
                      Join discord
                    </span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <BannerImage free={true} desktop={true} />
        </div>
      </div>
      <div className="relative w-full">
        <img src={Shadow} alt="" className="w-[1900px] max-w-full" />
        <div className="absolute top-[50%] left-[50%] w-[66%] max-w-full translate-x-[-50%] translate-y-[-50%] transform">
          <div className="w-full text-center text-16 text-white md:text-24 xl:text-36">
            After years of war and hunger, humans finally discovered what had
            always been in front of their eyes...
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTop
