import Icon from "assets/img/icon.png"
import Logo from "assets/img/logo.png"
import { ReactComponent as OpenSea } from "assets/img/opensea.svg"
import Connect from "components/connect/Connect"
import NavSocial from "components/nav/NavSocial"
import { useProps } from "contexts/PropsContext"
import { SOCIAL, URL } from "libs/constants"
import { openLink } from "libs/functions"
import { LinkInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FaTwitter, FaInstagram } from "react-icons/fa"
import { MdClose, MdKeyboardArrowRight, MdMenu } from "react-icons/md"
import { Link } from "react-router-dom"
import Wrapper from "utils/wrapper/Wrapper"

const Nav = () => {
  const { path } = useProps()

  const [open, setOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const [links] = useState([
    { title: "Home", link: URL.HOME },
    { title: "Mint", link: URL.MINT },
    { title: "Staking", link: URL.STAKE }
  ])

  const [socials] = useState([
    {
      title: "Twitter",
      icon: <FaTwitter className="text-18 text-grey" />,
      link: SOCIAL.TWITTER
    },
    // {
    //   title: "Discord",
    //   icon: <FaDiscord className="text-18 text-grey" />,
    //   link: SOCIAL.DISCORD
    // },
    {
      title: "Instagram",
      icon: <FaInstagram className="text-18 text-grey" />,
      link: SOCIAL.INSTAGRAM
    }
  ])

  useEffect(() => {
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-40 flex h-80 w-full min-w-[300px] items-center transition xl:h-[100px] ${
          scrollPosition > 0 ? "bg-grey" : ""
        }`}
      >
        <div className="relative flex w-full justify-center px-20 sm:px-30">
          <div
            className={`grid w-full max-w-screen-2xl flex-wrap items-center justify-between gap-10 sm:gap-16 ${
              path === URL.PROMO
                ? "grid-cols-[auto,auto] lg:grid-cols-[auto,1fr]"
                : "grid-cols-[auto,1fr,auto] lg:grid-cols-[1fr,auto,1fr]"
            }`}
          >
            <Wrapper open={path !== URL.PROMO}>
              <div className="hidden items-center justify-start gap-40 xl:flex">
                {links.map((link: LinkInterface, key: number) => (
                  <Link
                    to={link.link}
                    className="relative cursor-pointer text-18 font-bold text-white"
                    key={key}
                  >
                    {link.title}
                    <Wrapper open={path === link.link}>
                      <div className="absolute bottom-[-20px] left-[50%] h-8 w-8 translate-x-[-50%] transform rounded-full bg-red"></div>
                    </Wrapper>
                  </Link>
                ))}
              </div>
              <button
                name="Menu"
                onClick={() => setOpen(!open)}
                className="flex h-40 w-40 items-center justify-center xl:hidden"
              >
                <MdMenu className="text-28 text-white" />
              </button>
            </Wrapper>
            <Link
              to={URL.HOME}
              className="flow grid items-center justify-start gap-6"
            >
              <img src={Logo} alt="" className="h-40 xl:h-60" />
            </Link>
            <div className="flex w-full items-center justify-end gap-12 sm:gap-24">
              <div className="hidden items-center gap-20 xl:flex">
                <NavSocial
                  url={SOCIAL.TWITTER}
                  icon={
                    <FaTwitter className="text-22 text-white transition-all duration-200 group-hover:text-white" />
                  }
                />
                {/* <NavSocial
                  url={SOCIAL.DISCORD}
                  icon={
                    <FaDiscord className="text-22 text-white transition-all duration-200 group-hover:text-white" />
                  }
                /> */}
                <NavSocial
                  url={SOCIAL.INSTAGRAM}
                  icon={
                    <FaInstagram className="text-22 text-white transition-all duration-200 group-hover:text-white" />
                  }
                />
                <NavSocial
                  url={SOCIAL.OPENSEA}
                  icon={
                    <OpenSea className="fill-current text-22 text-white transition-all duration-200 group-hover:text-white" />
                  }
                />
              </div>
              <Wrapper open={path !== URL.PROMO}>
                <Connect />
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
      <Wrapper open={open}>
        <div className="fixed top-0 left-0 z-40 h-[100vh] w-full min-w-[300px] bg-white-90 py-18">
          <div className="relative z-20 grid w-full grid-cols-1">
            <div className="mb-20 flex w-full items-center justify-between px-20 md:px-30">
              <Link
                to={URL.HOME}
                className="flow grid items-center justify-center gap-6"
              >
                <img src={Icon} alt="" className="h-40 xl:h-60" />
                <div className="hidden text-24 font-bold text-white xl:flex">
                  Wing Wars
                </div>
              </Link>
              <button
                name="Close"
                onClick={() => setOpen(!open)}
                className="flex h-20 w-40 items-center justify-center sm:h-30 md:h-40"
              >
                <MdClose className="text-32 text-grey" />
              </button>
            </div>
            <div className="flex h-[calc(100vh-140px)] w-full items-center py-30 sm:h-[calc(100vh-160px)] xl:h-[calc(100vh-180px)]">
              <div className="grid max-h-full w-full grid-cols-1 items-center justify-center gap-4 overflow-scroll">
                {links.map((link: LinkInterface, key: number) => (
                  <Link
                    to={link.link}
                    onClick={() => setOpen(!open)}
                    className="group flex w-full cursor-pointer items-center justify-between px-20 py-12 font-bold hover:bg-[rgba(196,196,196,.2)] md:px-30"
                    key={key}
                  >
                    <span className="text-18 font-bold text-grey group-hover:bg-gradient-to-r group-hover:from-red group-hover:to-blue group-hover:bg-clip-text group-hover:text-transparent">
                      {link.title}
                    </span>
                    <MdKeyboardArrowRight className="hidden text-24 text-grey group-hover:flex" />
                  </Link>
                ))}
                {socials.map((link: LinkInterface, key: number) => (
                  <button
                    name="Social"
                    onClick={(e) => openLink(e, link.link)}
                    className="group flex w-full cursor-pointer items-center justify-between px-20 py-12 font-bold hover:bg-[rgba(196,196,196,.2)] md:px-30"
                    key={key}
                  >
                    <span className="text-18 font-bold text-grey group-hover:bg-gradient-to-r group-hover:from-red group-hover:to-blue group-hover:bg-clip-text group-hover:text-transparent">
                      {link.title}
                    </span>
                    {link.icon}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full px-20 md:px-30">
              <div className="w-full border-t-1 border-grey-10 pt-20 text-14 text-grey-60 sm:pt-30">
                Copyright © Wing Wars {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Nav
