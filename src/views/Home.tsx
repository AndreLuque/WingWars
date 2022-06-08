import Footer from "components/footer/Footer"
import HomeFuture from "components/home/HomeFuture"
import HomeJoin from "components/home/HomeJoin"
import HomeRoadmap from "components/home/HomeRoadmap"
import HomeTeam from "components/home/HomeTeam"
import HomeTop from "components/home/HomeTop"
import HomeTraits from "components/home/HomeTraits"
import Nav from "components/nav/Nav"
import WrapperPage from "components/wrapper/WrapperPage"
import React from "react"

const Home = () => {
  return (
    <>
      <Nav />
      <WrapperPage>
        <div className="relative flex w-full justify-center pb-[120px] lg:pb-[160px]">
          <div className="from-green-light-60 absolute bottom-0 left-[50%] h-[1200px] w-screen translate-x-[-50%] transform bg-gradient-to-t to-transparent"></div>
          <div className="relative grid w-full grid-cols-1 gap-[140px] lg:gap-[240px]">
            <HomeTop />
            <HomeJoin />
            <HomeFuture />
            <HomeTraits />
            <HomeRoadmap />
            <HomeTeam />
          </div>
        </div>
      </WrapperPage>
      <Footer />
    </>
  )
}

export default Home
