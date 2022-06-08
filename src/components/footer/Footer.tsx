import Icon from "assets/img/icon.png"
import { ReactComponent as OpenSea } from "assets/img/opensea.svg"
import FooterButton from "components/footer/FooterButton"
import FooterSocial from "components/footer/FooterSocial"
import { SOCIAL, URL } from "libs/constants"
import React from "react"
import { FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = ({ light }: { light?: boolean }) => {
  return (
    <>
      <div className={`relative w-full ${light ? "bg-white" : "bg-green"}`}>
        <div className="flex w-full justify-center px-20 pb-30 pt-30 sm:px-30 sm:pb-40 sm:pt-40 xl:pt-60">
          <div className="grid w-full max-w-screen-2xl grid-cols-1 gap-20 sm:gap-30 md:gap-40">
            <div className="grid w-full grid-cols-1 items-start justify-between gap-20 sm:gap-40 xl:grid-cols-[1fr,auto]">
              <div className="grid w-full grid-cols-1 gap-30">
                <div className="flex w-full justify-start">
                  <Link
                    to={URL.HOME}
                    className="flow grid items-center justify-center gap-12"
                  >
                    <img src={Icon} alt="" className="h-30 sm:h-50" />
                  </Link>
                </div>
                <div className="flex w-full justify-start">
                  <div
                    className={`w-[400px] max-w-full text-14 sm:text-16 md:text-18 ${
                      light ? "text-grey-60" : "text-white-60"
                    }`}
                  >
                    Chickens and Pigeons vie for the absolute control of the
                    planet, and the title of the deadliest beasts.
                  </div>
                </div>
              </div>
              <div className="flex w-full items-start">
                <div className="grid grid-cols-1 items-start gap-40 sm:gap-60 xl:grid-cols-2 xl:gap-80">
                  <div className="flex w-full items-start">
                    <div className="grid grid-cols-1 gap-30">
                      <div
                        className={`w-full text-24 font-bold ${
                          light ? "text-grey" : "text-white"
                        }`}
                      >
                        Links
                      </div>
                      <div className="grid w-[210px] grid-cols-1 gap-20">
                        <FooterButton
                          light={light}
                          url={URL.HOME}
                          title={"Home"}
                        />
                        {/* <FooterButton
                          light={light}
                          url={SOCIAL.DISCORD}
                          title={"Contact"}
                        /> */}
                        <FooterButton
                          light={light}
                          url={SOCIAL.PRIVACY}
                          title={"Privacy Policy"}
                        />
                        <FooterButton
                          light={light}
                          url={SOCIAL.TERMS}
                          title={"Terms of Service"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-start">
                    <div className="grid grid-cols-1 gap-30">
                      <div
                        className={`w-full text-24 font-bold ${
                          light ? "text-grey" : "text-white"
                        }`}
                      >
                        Our social media
                      </div>
                      <div className="grid w-full grid-cols-4 justify-start gap-20">
                        <FooterSocial
                          light={light}
                          url={SOCIAL.TWITTER}
                          icon={
                            <FaTwitter
                              className={`text-22 transition-all duration-200 ${
                                light
                                  ? "text-grey group-hover:text-white"
                                  : "text-white group-hover:text-grey"
                              }`}
                            />
                          }
                        />
                        {/* <FooterSocial
                          light={light}
                          url={SOCIAL.DISCORD}
                          icon={
                            <FaDiscord
                              className={`text-22 transition-all duration-200 ${
                                light
                                  ? "text-grey group-hover:text-white"
                                  : "text-white group-hover:text-grey"
                              }`}
                            />
                          }
                        /> */}
                        <FooterSocial
                          light={light}
                          url={SOCIAL.INSTAGRAM}
                          icon={
                            <FaInstagram
                              className={`text-22 transition-all duration-200 ${
                                light
                                  ? "text-grey group-hover:text-white"
                                  : "text-white group-hover:text-grey"
                              }`}
                            />
                          }
                        />
                        <FooterSocial
                          light={light}
                          url={SOCIAL.OPENSEA}
                          icon={
                            <OpenSea
                              className={`fill-current text-22 transition-all duration-200 ${
                                light
                                  ? "text-grey group-hover:text-white"
                                  : "text-white group-hover:text-grey"
                              }`}
                            />
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-full border-b-1 opacity-5 ${
                light ? "border-grey" : "border-white"
              }`}
            ></div>
            <div
              className={`w-full text-center text-14 sm:text-16 md:text-18 ${
                light ? "text-grey-60" : "text-white-60"
              }`}
            >
              Copyright © Wing Wars {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
