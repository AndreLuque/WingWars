import Wanted from "assets/img/wanted.png"
import Bird1 from "assets/img/wings/1.jpg"
import Bird10 from "assets/img/wings/10.png"
import Bird11 from "assets/img/wings/11.png"
import Bird12 from "assets/img/wings/12.png"
import Bird13 from "assets/img/wings/13.png"
import Bird14 from "assets/img/wings/14.png"
import Bird15 from "assets/img/wings/15.png"
import Bird16 from "assets/img/wings/16.png"
import Bird2 from "assets/img/wings/2.jpg"
import Bird3 from "assets/img/wings/3.jpg"
import Bird4 from "assets/img/wings/4.jpg"
import Bird5 from "assets/img/wings/5.png"
import Bird6 from "assets/img/wings/6.png"
import Bird7 from "assets/img/wings/7.png"
import Bird8 from "assets/img/wings/8.png"
import Bird9 from "assets/img/wings/9.png"
import HomeSliderItem from "components/home/HomeSliderItem"
import React, { useEffect, useState } from "react"

const HomeFuture = () => {
  const [birds1] = useState([
    Bird1,
    Bird9,
    Bird2,
    Bird10,
    Bird3,
    Bird11,
    Bird4,
    Bird12
  ])
  const [birds2] = useState([
    Bird5,
    Bird13,
    Bird6,
    Bird14,
    Bird7,
    Bird15,
    Bird8,
    Bird16
  ])

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const position = window.scrollY
    setOffset(position)
  }

  return (
    <>
      <div className="relative mt-[60px] h-[420px] w-full sm:h-[770px]">
        <div className="absolute top-0 left-[50%] z-20 hidden w-screen translate-x-[-50%] transform sm:flex">
          <div className="absolute top-[-80px] h-[200px] w-full bg-gradient-to-b from-grey to-transparent sm:top-0"></div>
          <img
            src={Wanted}
            alt=""
            className="absolute top-0 left-[50%] max-w-[210%] translate-x-[-50%] translate-y-[-20%] transform"
          />
        </div>
        <div className="absolute top-[50%] left-[50%] mb-0 flex w-[calc(100vw+200px)] translate-x-[-50%] translate-y-[-50%] transform justify-center sm:mb-30">
          <div className="grid w-full grid-cols-1 gap-10">
            <div className="relative h-180 w-full overflow-x-hidden sm:h-[250px]">
              <div
                style={{ left: `${-offset}px` }}
                className="absolute top-0 flex w-max space-x-10 transition duration-200"
              >
                {new Array(3).fill(1).map((entry: number, key: number) => (
                  <div className="flex space-x-10" key={key}>
                    {birds1.map((image: string, ke: number) => (
                      <HomeSliderItem image={image} key={ke} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-180 w-full overflow-x-hidden sm:h-[250px]">
              <div
                style={{ right: `${-offset}px` }}
                className="absolute top-0 flex w-max space-x-[10px] transition duration-200"
              >
                {new Array(3).fill(1).map((entry: number, key: number) => (
                  <div className="flex space-x-[10px]" key={key}>
                    {birds2.map((image: string, ke: number) => (
                      <HomeSliderItem image={image} key={ke} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex h-180 w-full overflow-x-hidden sm:h-[250px]">
              <div
                style={{ left: `${-offset}px` }}
                className="absolute top-0 flex w-max space-x-[10px] transition duration-200"
              >
                {new Array(3).fill(1).map((entry: number, key: number) => (
                  <div className="flex space-x-[10px]" key={key}>
                    {birds1.map((image: string, ke: number) => (
                      <HomeSliderItem image={image} key={ke} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeFuture
