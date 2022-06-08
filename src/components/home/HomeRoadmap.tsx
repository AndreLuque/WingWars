import { RoadmapInterface } from "libs/interfaces"
import React, { useEffect, useRef, useState } from "react"

const HomeRoadmap = () => {
  const ref = useRef<HTMLDivElement>(null)

  const bubble1 = useRef<HTMLDivElement>(null)
  const bubble2 = useRef<HTMLDivElement>(null)
  const bubble3 = useRef<HTMLDivElement>(null)
  const bubble4 = useRef<HTMLDivElement>(null)
  const bubble5 = useRef<HTMLDivElement>(null)
  const bubble6 = useRef<HTMLDivElement>(null)

  const [offset, setOffset] = useState(0)
  const [line, setLine] = useState(0)
  const [active, setActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false
  ])

  const [roadmap] = useState<RoadmapInterface[]>([
    {
      title: "Phase 1",
      sub: "April 2022",
      text: "An army is stronger than a single warrior so we will be searching far and wide for champions to join our community and help spread the word of Wing wars. Our attack will start at the beginning of April."
    },
    {
      title: "Phase 2",
      sub: "May 2022",
      text: "During this phase, the almighty sale will take place. The Wing Wars sale will be divided in pre-sale and public sale. Whitelist members will mint their NFTs before public mint, so make sure you check out 📑┃get-whitelisted so you don't miss out!"
    },
    {
      title: "Phase 3",
      sub: "June 2022",
      text: "The spoils from the first battle will be reinvested into the Wing Wars army so that we can continue to add numbers to our community. During this phase, holders will be able to stake their NFTs to earn the game token."
    },
    {
      title: "Phase 4",
      sub: "July & August 2022",
      text: "Earn $CORN by staking your Wing Wars NFT. Use $CORN to buy Mutant Serum, allowing you to upgrade your NFT! This will only transform your current NFT, not burn it! $CORN will be the most valuable asset in the Wing Wars Metaverse. The whitepaper for our P2E game will also be made public."
    },
    {
      title: "Phase 5",
      sub: "September & October 2022",
      text: "A new collection relevant to the P2E game will be dropped during this phase. Wing Wars are starting to heat up.... don't miss out on your chance to be early to the game! We will be very focused on game development during this phase, however we have not forgotten about the community! We have more than a few surprises planned for the Bird Gang!"
    },
    {
      title: "Phase 6",
      sub: "November 2022 - February 2023",
      text: "Let the war begin! Holders will be to able to play the Wing Wars game, giving them the advantage when earning the weapons, avatars, and tools essential for victory."
    }
  ])

  useEffect(() => {
    handleScroll()
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setLine((old) => Math.max(old, -offset + window.innerHeight / 2))
  }, [offset])

  const handleScroll = () => {
    if (ref.current) {
      setOffset(ref.current.getBoundingClientRect().top)
    } else {
      setOffset(0)
    }

    onActive()
  }

  const onActive = () => {
    setActive((old) =>
      old.map((entry: boolean, key: number) => (entry ? entry : onState(key)))
    )
  }

  const onRef = (id: number) => {
    switch (id) {
      case 0:
        return bubble1
      case 1:
        return bubble2
      case 2:
        return bubble3
      case 3:
        return bubble4
      case 4:
        return bubble5
      case 5:
        return bubble6
      default:
        return bubble1
    }
  }

  const onState = (id: number) => {
    const element = onRef(id)

    if (element.current) {
      return (
        element.current.getBoundingClientRect().top < window.innerHeight / 2
      )
    }

    return false
  }

  return (
    <>
      <div id="#roadmap" className="flex w-full justify-center">
        <div className="relative w-[900px] max-w-full">
          <div className="absolute top-0 bottom-0 left-[16px] w-6 overflow-hidden bg-[#3d3d3d] sm:left-[139px] md:left-[155px] lg:left-[195px]">
            <div
              ref={ref}
              style={{ height: `${line}px` }}
              className="absolute top-0 w-6 overflow-hidden bg-red"
            ></div>
            <div className="absolute top-0 bottom-0 right-0 w-6 ">
              <div className="absolute top-0 left-0 h-40 w-6 bg-gradient-to-b from-grey to-transparent"></div>
              <div className="absolute bottom-0 left-0 h-40 w-6 bg-gradient-to-t from-grey to-transparent"></div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-40 sm:gap-60 md:gap-80 2xl:gap-[140px]">
            {roadmap.map((entry: RoadmapInterface, key: number) => (
              <div
                className="relative grid w-full grid-cols-[auto,1fr] gap-24 py-40 sm:grid-cols-[auto,auto,1fr] md:gap-40 lg:gap-80 lg:py-80"
                key={key}
              >
                <div className="hidden w-[80px] items-center justify-end sm:flex sm:w-[100px]">
                  <span
                    className={`text-24 font-bold md:text-36 lg:text-48 ${
                      active[key]
                        ? "bg-gradient-to-r from-red to-blue bg-clip-text text-transparent"
                        : "text-white"
                    }`}
                  >
                    {Math.round((key + 1) * (100 / roadmap.length))}%
                  </span>
                </div>
                <div className="flex w-36 items-center">
                  <div
                    ref={onRef(key)}
                    className={`flex h-36 w-36 items-center justify-center rounded-full ${
                      active[key]
                        ? "bg-gradient-to-r from-red to-blue"
                        : "bg-[#3d3d3d]"
                    }`}
                  >
                    <div className="h-24 w-24 rounded-full bg-white"></div>
                  </div>
                </div>
                <div
                  className={`grid-col-1 grid w-full transform transition-all duration-500 ${
                    active[key]
                      ? "opacity-1 translate-y-[0px]"
                      : "translate-y-[-100px] opacity-0"
                  }`}
                >
                  <div
                    className={`mb-10 w-full text-16 font-black uppercase sm:text-18 ${
                      key % 2 === 0 ? "text-red" : "text-blue"
                    }`}
                  >
                    {entry.title}
                  </div>
                  <div
                    className={`mb-24 w-full text-24 font-black uppercase md:text-[36px] ${
                      active[key] ? "text-white" : "text-white-60"
                    }`}
                  >
                    {entry.sub}
                  </div>
                  <div className="font-regular w-full text-14 text-white-60 sm:text-16 md:text-20">
                    {entry.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:text-96px w-full bg-gradient-to-b from-white-60 to-white-10 bg-clip-text text-center text-36 font-black text-transparent sm:text-48 md:text-[64px]">
        THE START OF A NEW ERA...
      </div>
    </>
  )
}

export default HomeRoadmap
