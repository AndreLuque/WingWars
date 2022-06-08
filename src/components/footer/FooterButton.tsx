import { openLink } from "libs/functions"
import React from "react"

const FooterButton = ({
  light,
  url,
  title
}: {
  light?: boolean
  url: string
  title: string
}) => {
  return (
    <>
      <button
        name="Link"
        onClick={(e) => openLink(e, url)}
        className="group w-full text-left"
      >
        <span
          className={`text-14 font-bold group-hover:bg-gradient-to-r group-hover:from-red group-hover:to-blue group-hover:bg-clip-text group-hover:text-transparent sm:text-16 md:text-18 ${
            light ? "text-grey" : "text-white"
          }`}
        >
          {title}
        </span>
      </button>
    </>
  )
}

export default FooterButton
