import Footer from "components/footer/Footer"
import MintTop from "components/mint/MintTop"
import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import React from "react"

const Mint = () => {
  return (
    <>
      <Nav />
      <WrapperPage>
        <div className="relative flex w-full justify-center pb-[40px] lg:pb-[60px]">
          <div className="from-green-light-60 absolute bottom-0 left-[50%] h-[1200px] w-screen translate-x-[-50%] transform bg-gradient-to-t to-transparent"></div>
          <div className="relative grid w-full grid-cols-1 gap-[140px] lg:gap-[240px]">
            <MintTop />
          </div>
        </div>
      </WrapperPage>
      <Footer />
    </>
  )
}

export default Mint
