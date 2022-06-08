import React from "react"

const HomeJoin = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="grid w-[590px] grid-cols-1">
          <div className="mb-24 w-full text-center text-28 font-black text-white sm:text-36 md:text-[48px]">
            That the greatest killers in nature are{" "}
            <span className="text-28 font-black text-red sm:text-36 md:text-[48px]">
              chickens
            </span>{" "}
            and{" "}
            <span className="text-28 font-black text-blue sm:text-36 md:text-[48px]">
              pigeons
            </span>
          </div>
          <div className="mb-32 w-full text-center text-14 text-white-60 sm:text-16 md:text-18">
            They trained, bred and enhanced us, the natural sons of Valhalla,
            the offspring of Mars, the hordes of Kalli. They took our killer
            instincts and amped them to eleven.
          </div>
          {/* <div className="mb-32 flex w-full justify-center">
            <button
              name="Discord"
              onClick={(e) => openLink(e, SOCIAL.DISCORD)}
              className="flex h-[56px] items-center justify-center gap-12 rounded-full bg-blue px-32"
            >
              <FaDiscord className="text-white" />
              <span className="font-bold text-white">Join discord</span>
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default HomeJoin
