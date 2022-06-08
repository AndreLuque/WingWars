import { openLink } from "libs/functions"
import React from "react"

const FooterSocial = ({
  light,
  url,
  icon
}: {
  light?: boolean
  url: string
  icon: JSX.Element
}) => {
  return (
    <>
      <button
        name="Social"
        onClick={(e) => openLink(e, url)}
        className={`group flex h-50 w-50 items-center justify-center rounded-full transition duration-200 ${
          light ? "bg-grey-10 hover:bg-grey" : "bg-white-10 hover:bg-white"
        }`}
      >
        {icon}
      </button>
    </>
  )
}

export default FooterSocial
