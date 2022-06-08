import Banner from "assets/img/banner.webp"
import BannerMobile from "assets/img/banner_mobile.png"
import { ReactComponent as Discord } from "assets/img/discord.svg"
import { ReactComponent as Gamepad } from "assets/img/gamepad.svg"
import PromoSlider from "components/promo/PromoSlider"
import { ReasonsInterface } from "libs/interfaces"
import React, { useState } from "react"

const PromoTop = () => {
  const [reasons] = useState<ReasonsInterface[]>([
    {
      title: "Play to Earn game",
      text: "We are developing a play to earn game in which chickens and pigeons vie for the absolute control of the planet and the title of the deadliest beasts! Players will be able to battle against one another, breed their birds to create new NFTs and much more!"
    },
    {
      title: "Staking",
      text: "Staking will be available as soon as you mint. Holders will earn passive income just by holding a Wing Wars NFT!"
    },
    {
      title: "Free mint for every holder",
      text: "Every person that mints a Wing Wars NFT and holds it will be elegible for a future collection which will be very relevant to the Wing Wars game. Hint: It has something to do with the attacks the birds will have…."
    },
    {
      title: "Community-Focused",
      text: "In just a few days we’ve built an awesome community, this is just the beginning! The Wing Wars community is the core of this project, we want our community to decide all the relevant aspects for the project. For starters, we’ll let the community decide the mint price!"
    }
  ])

  return (
    <>
      <div
        id="#home"
        className="relative grid w-full grid-cols-1 pt-[120px] sm:min-h-[100vh] sm:pt-[130px] xl:pt-[140px]"
      >
        <div className="absolute top-0 bottom-0 left-[50%] w-screen translate-x-[-50%] transform overflow-hidden bg-grey">
          <div className="absolute bottom-0 left-0 h-[800px] w-[800px] translate-x-[-50%] translate-y-[50%] transform rounded-full bg-red blur-[600px] filter"></div>{" "}
          <div className="absolute top-0 right-0 h-[800px] w-[800px] translate-x-[50%] translate-y-[-50%] transform rounded-full bg-blue blur-[600px] filter"></div>
          <div className="absolute bottom-0 left-0 h-100 w-screen bg-gradient-to-t from-grey to-transparent"></div>
        </div>
        <div className="relative grid w-full grid-cols-1">
          <div className="z-20 flex w-full items-start justify-center">
            <div className="grid w-[1050px] max-w-full grid-cols-1">
              <div className="mb-16 w-full text-center text-24 font-black leading-[110%] text-white sm:mb-30 sm:text-[48px] md:text-[64px]">
                JOIN OUR DISCORD
              </div>
              <div className="flex w-full justify-center">
                <div className="mb-20 w-[530px] max-w-full text-center text-14 text-white-60 sm:mb-30 sm:text-16">
                  Only a few whitelist spots left! Join now to purchase the
                  wings wars nfts at a 40% discount + other benefits!
                </div>
              </div>
              {/* <div className="mb-50 flex w-full justify-center">
                <div className="grid w-[124px] max-w-full grid-cols-1 gap-12 sm:w-[240px] sm:gap-24">
                  <button
                    name="Discord"
                    onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                    className="flex h-[56px] items-center justify-center gap-12 rounded-full bg-blue sm:px-28"
                  >
                    <FaDiscord className="text-white" />
                    <span className="hidden text-14 font-bold text-white sm:flex md:text-18">
                      Join discord
                    </span>
                  </button>
                </div>
              </div> */}
              <div className="w-full sm:hidden">
                <PromoSlider />
              </div>
              <div className="grid w-full grid-cols-1 items-center gap-20 rounded-10 p-24 sm:p-30 md:p-40 lg:grid-cols-[1fr,auto,1fr,auto,1fr] lg:bg-white-10">
                <div className="grid w-full grid-cols-1 gap-4 lg:gap-10">
                  <div className="w-full text-center text-24 font-black text-white lg:text-36">
                    10,000
                  </div>
                  <div className="text-center text-18 text-white-60">
                    Supply
                  </div>
                </div>
                <div className="flex w-full justify-center lg:w-auto">
                  <div className="h-0 w-[150px] border-r-1 border-b-1 border-white-10 lg:h-80 lg:w-0"></div>
                </div>
                <div className="grid w-full grid-cols-1 gap-4 lg:gap-10">
                  <div className="w-full text-center text-24 font-black text-white lg:text-36">
                    Ethereum
                  </div>
                  <div className="text-center text-18 text-white-60">
                    Blockchain
                  </div>
                </div>
                <div className="flex w-full justify-center lg:w-auto">
                  <div className="h-0 w-[150px] border-r-1 border-b-1 border-white-10 lg:h-80 lg:w-0"></div>
                </div>
                <div className="grid w-full grid-cols-1 gap-4 lg:gap-10">
                  <div className="w-full text-center text-24 font-black text-white lg:text-36">
                    100+
                  </div>
                  <div className="text-center text-18 text-white-60">
                    Attributes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative -mx-20 hidden w-screen sm:aspect-w-16 sm:aspect-h-8 sm:-mx-30 sm:flex">
            <img
              src={Banner}
              alt=""
              className="absolute bottom-[0%] left-[50%] hidden h-auto w-screen max-w-[100vw] transform sm:flex"
            />
            <img
              src={BannerMobile}
              alt=""
              className="flex h-auto w-screen max-w-[100vw] sm:hidden"
            />
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-40 sm:gap-60 md:gap-100 lg:gap-[150px]">
        <div className="grid w-full grid-cols-1 gap-40 sm:gap-60 md:grid-cols-2 md:gap-100">
          {reasons.map((reason: ReasonsInterface, key: number) => (
            <div className="grid w-full grid-cols-1" key={key}>
              <div className="mb-36 flex w-full justify-center">
                <Gamepad
                  className={`fill-current ${
                    key === 0 || key === 3 ? "text-blue" : "text-red"
                  }`}
                />
              </div>
              <div className="mb-24 w-full text-center text-24 font-black text-white sm:text-36">
                {reason.title}
              </div>
              <div className="w-full text-center text-18 text-white-60">
                {reason.text}
              </div>
            </div>
          ))}
        </div>
        <div className="grid w-full grid-cols-1 gap-80 overflow-hidden rounded-10 bg-gradient-to-r from-blue to-red p-40 sm:p-60 md:p-80 lg:p-[110px] xl:grid-cols-[1fr,auto]">
          <div className="w-full">
            <div className="mb-24 w-full text-24 font-black text-white sm:text-36">
              Join discord
            </div>
            <div className="mb-32 flex w-full justify-start">
              <div className="w-full max-w-[500px] text-18 text-white-60">
                Only a few whitelist spots left! Join now to purchase the wings
                wars nfts at a 40% discount + other benefits!
              </div>
            </div>
            {/* <div className="flex w-full justify-start">
              <button
                name="Discord"
                onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                className="flex h-[56px] items-center justify-center gap-12 rounded-full bg-white px-28"
              >
                <FaDiscord className="text-grey" />
                <span className="flex text-14 font-bold text-grey md:text-18">
                  Join discord
                </span>
              </button>
            </div> */}
          </div>
          <div className="relative flex justify-center">
            <Discord className="absolute top-[50%] left-[50%] h-[500px] w-[800px] translate-x-[-50%] translate-y-[-50%] rotate-[-10deg] transform opacity-10" />
            <Discord className="relative w-300" />
          </div>
        </div>
      </div>
    </>
  )
}

export default PromoTop
