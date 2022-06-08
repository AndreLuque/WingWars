import AccessoiresBottom from "assets/img/accessoires_bottom.png"
import AccessoiresTop from "assets/img/accessoires_top.png"
import { ReactComponent as OpenSea } from "assets/img/opensea.svg"
import { SOCIAL } from "libs/constants"
import { openLink } from "libs/functions"
import React from "react"

const HomeTraits = () => {
  return (
    <>
      <div className="relative w-full py-40 sm:py-60 md:py-80 lg:py-[120px]">
        <div className="absolute top-0 bottom-0 left-[50%] w-screen translate-x-[-50%] transform bg-white"></div>
        <div
          id="#traits"
          className="relative grid w-full grid-cols-1 gap-40 sm:gap-60 md:gap-80 lg:gap-[120px] xl:grid-cols-[1fr,500px]"
        >
          <div className="flex w-full items-start">
            <div className="grid w-full grid-cols-1 gap-24">
              <div className="w-full text-24 font-black text-grey sm:text-36 md:text-48">
                Different accessories for each section
              </div>
              <div className="w-full text-14 text-grey-60 sm:text-16 md:text-18">
                These accessories increase the birds’ stats: Breeding, Strength,
                Defense, and Egg Production. These stats are very relevant to
                the Wing Wars game.
                <br />
                <br /> Stay tuned for the whitepaper where we will describe the
                game in depth.
                <br />
                <br /> Just a small heads up: the better the stats, the better
                the bird… In this first drop, birds will only have common
                accessories, however, in the game there will be 4 tiers of
                accessories: Common, Rare, Special & Legendary (you will be able
                to purchase these accessories in the game and in future drops!)
              </div>
              <div className="flex w-full justify-start">
                <button
                  name="Connect"
                  onClick={(e) => openLink(e, SOCIAL.OPENSEA)}
                  className="flex h-[56px] items-center justify-center gap-12 rounded-full bg-red px-32"
                >
                  <div className="flex h-22 w-22 items-center justify-center rounded-full bg-white">
                    <OpenSea className="h-14 w-14 fill-current text-red" />
                  </div>
                  <span className="text-16 font-bold text-white sm:text-18">
                    Connect wallet
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start">
            <div className="grid w-full grid-cols-1 gap-30">
              <div className="flex w-full justify-center">
                <img
                  src={AccessoiresTop}
                  alt=""
                  className="w-[500px] max-w-full"
                />
              </div>
              <div className="flex w-full justify-center">
                <img
                  src={AccessoiresBottom}
                  alt=""
                  className="w-[500px] max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTraits
