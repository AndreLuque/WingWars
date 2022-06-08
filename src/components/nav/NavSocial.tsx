import { openLink } from "libs/functions"
import React from "react"

const NavSocial = ({ url, icon }: { url: string; icon: JSX.Element }) => {
  return (
    <>
      <button
        name="Social"
        onClick={(e) => openLink(e, url)}
        className="group flex h-50 w-50 items-center justify-center rounded-full bg-grey-10 transition duration-200 hover:bg-grey"
      >
        {icon}
      </button>
    </>
  )
}

export default NavSocial
