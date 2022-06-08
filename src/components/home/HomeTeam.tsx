import Testament from "assets/img/testament.webp"
import Bird1 from "assets/img/wings/1.jpg"
import Bird11 from "assets/img/wings/11.png"
import Bird12 from "assets/img/wings/12.png"
import Bird13 from "assets/img/wings/13.png"
import Bird14 from "assets/img/wings/14.png"
import Bird2 from "assets/img/wings/2.jpg"
import Bird3 from "assets/img/wings/3.jpg"
import Bird4 from "assets/img/wings/4.jpg"
import World from "assets/img/world.webp"
import WorldSmall from "assets/img/world_small.webp"
import { SocialType } from "libs/enums"
import { openLink } from "libs/functions"
import { SocialInterface, TeamInterface } from "libs/interfaces"
import React, { useState } from "react"
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const HomeTeam = () => {
  const [team] = useState<TeamInterface[]>([
    {
      name: "FALCON",
      title:
        "Pulling the strings behind the scene. The north star of the Team. Project Manager & bird tamer.",
      avatar: Bird12,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/i%C3%B1igo-peralta-57a313163/"
        }
      ]
    },
    {
      name: "WOODPECKER",
      title:
        "The Architect, the Creator, the Oracle. Loving father of the birds. 3D Design Team leader.",
      avatar: Bird11,
      socials: []
    },
    {
      name: "WISE OWL",
      title: "Born in the Metaverse, Satoshi's mate. Blockchain Guru.",
      avatar: Bird4,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/andre-queiroz-costa-b5abb31b6"
        }
      ]
    },
    {
      name: "GOLDEN EAGLE",
      title: "Elegant and well-looking. PR Team.",
      avatar: Bird3,
      socials: [
        {
          type: SocialType.Linkedin,
          link: "https://www.linkedin.com/in/ignacio-vivas-hernando-99596b196/"
        }
      ]
    },
    {
      name: "HAWK",
      title: "Silent, precise and deadly. 3D Design Team.",
      avatar: Bird1,
      socials: []
    },
    {
      name: "THE DODO",
      title:
        "Dont mistake his cuteness. He is a dangerous bloke. 3D Design Team.",
      avatar: Bird2,
      socials: []
    },
    {
      name: "CUCKOO",
      title:
        "No one really knows this guy. JK - Epic design skills. Game Designer.",
      avatar: Bird13,
      socials: []
    },
    {
      name: "DONALD",
      title: "He looks like a duck. The God of social media. PR Team.",
      avatar: Bird14,
      socials: []
    }
  ])

  return (
    <>
      <div className="relative w-full py-[200px] sm:py-[300px] md:py-[400px]">
        <img
          src={World}
          alt=""
          className="absolute top-0 bottom-0 left-[50%] hidden h-full max-h-[5000px] max-w-[5000px] translate-x-[-50%] transform sm:flex"
        />
        <img
          src={WorldSmall}
          alt=""
          className="absolute top-0 bottom-0 left-[50%] flex h-full max-h-[5000px] max-w-[5000px] translate-x-[-50%] transform sm:hidden"
        />
        <div className="relative grid w-full grid-cols-1 gap-[60px] sm:gap-80 md:gap-100 lg:gap-[200px]">
          <div className="flex w-full justify-center">
            <img src={Testament} alt="" className="w-full max-w-[820px]" />
          </div>
        </div>
      </div>

      <div id="#team" className="relative my-40 w-full sm:my-60">
        <div className="relative grid w-full grid-cols-1 gap-40 md:gap-80 lg:gap-120">
          <div className="flex w-full justify-start">
            <div className="grid w-[530px] max-w-full grid-cols-1 gap-30">
              <div className="md:text-42 w-full text-24 font-bold leading-[110%] text-white sm:text-36 lg:text-[48px]">
                Meet the team
              </div>
              <div className="w-full text-14 text-white-60 sm:text-16 md:text-18">
                They trained, bred and enhanced us, the natural sons of
                Valhalla, the offspring of Mars, the hordes of Kalli. They took
                our killer instincts and amped them to eleven.
              </div>
            </div>
          </div>
          <div className="w-full justify-center">
            <div className="grid w-full max-w-full grid-cols-2 gap-16 sm:gap-30 lg:grid-cols-4 2xl:gap-x-70 2xl:gap-y-40">
              {team.map((person: TeamInterface, key: number) => (
                <div className="w-full" key={key}>
                  <div className="mb-24 flex w-full justify-center">
                    <div className="w-[200px] max-w-full">
                      <img
                        src={person.avatar}
                        alt=""
                        className="w-full rounded-full"
                      />
                    </div>
                  </div>
                  <div className="mb-16 w-full text-center text-18 font-bold text-white sm:text-24">
                    {person.name}
                  </div>
                  <div className="font-regular mb-24 w-full text-center text-14 text-white-60 sm:text-18">
                    {person.title}
                  </div>
                  <div className="flex hidden w-full items-center justify-center gap-12">
                    {person.socials.map(
                      (social: SocialInterface, ke: number) => (
                        <button
                          name="Social"
                          onClick={(e) => openLink(e, social.link)}
                          className="group flex h-50 w-50 items-center justify-center rounded-full bg-white-10 transition-all duration-300 hover:bg-white"
                          key={ke}
                        >
                          {
                            {
                              [SocialType.Instagram]: (
                                <FaInstagram className="text-18 text-white transition-all duration-300 group-hover:text-grey" />
                              ),
                              [SocialType.Linkedin]: (
                                <FaLinkedin className="text-18 text-white transition-all duration-300 group-hover:text-grey" />
                              ),
                              [SocialType.Twitter]: (
                                <FaTwitter className="text-18 text-white transition-all duration-300 group-hover:text-grey" />
                              )
                            }[social.type]
                          }
                        </button>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTeam
