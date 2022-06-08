import { useProps } from "contexts/PropsContext"
import React from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"

const NavLink = ({ url, title }: { url: string; title: string }) => {
  const { path } = useProps()

  return (
    <>
      <div className="flex w-full justify-center">
        <Link to={url} className="group relative max-w-full">
          <div
            className={`absolute top-[50%] left-[-50px] translate-y-[-50%] transform group-hover:flex ${
              path === url ? "flex" : "hidden"
            }`}
          >
            <MdKeyboardArrowRight className="text-green-light text-24" />
          </div>
          <div
            className={`absolute top-[50%] right-[-50px] translate-y-[-50%] transform group-hover:flex ${
              path === url ? "flex" : "hidden"
            }`}
          >
            <MdKeyboardArrowLeft className="text-green-light text-24" />
          </div>
          <div
            className={`group-hover:text-green-light w-full text-22 font-bold leading-[110%] sm:text-[24px] md:text-[36px] ${
              path === url ? "text-green-light" : "text-white"
            }`}
          >
            {title}
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavLink
