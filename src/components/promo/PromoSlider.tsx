import Wanted from "assets/img/wanted.png"
import Bird1 from "assets/img/wings/1.jpg"
import Bird10 from "assets/img/wings/10.png"
import Bird11 from "assets/img/wings/11.png"
import Bird12 from "assets/img/wings/12.png"
import Bird2 from "assets/img/wings/2.jpg"
import Bird3 from "assets/img/wings/3.jpg"
import Bird4 from "assets/img/wings/4.jpg"
import Bird9 from "assets/img/wings/9.png"
import HomeSliderItem from "components/home/HomeSliderItem"
import React, { useState } from "react"

const PromoSlider = () => {
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

  return (
    <>
      <div className="relative my-[30px] h-[200px] w-full">
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
              <div className="absolute top-0 flex w-max animate-roll-left">
                {new Array(4).fill(1).map((entry: number, key: number) => (
                  <div className="flex space-x-10 px-5" key={key}>
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

export default PromoSlider
