import Footer from "components/footer/Footer"
import HomeFuture from "components/home/HomeFuture"
import Nav from "components/nav/Nav"
import PromoTop from "components/promo/PromoTop"
import WrapperPage from "components/wrapper/WrapperPage"
import React from "react"

const Promo = () => {
  return (
    <>
      <Nav />
      <WrapperPage>
        <div className="relative flex w-full justify-center pb-[120px] lg:pb-[160px]">
          <div className="from-green-light-60 absolute bottom-0 left-[50%] h-[1200px] w-screen translate-x-[-50%] transform bg-gradient-to-t to-transparent"></div>
          <div className="relative grid w-full grid-cols-1 gap-[140px] lg:gap-[240px]">
            <PromoTop />
            <div className="hidden w-full sm:flex">
              <HomeFuture />
            </div>
          </div>
        </div>
      </WrapperPage>
      <Footer light={true} />
    </>
  )
}

export default Promo
