import AppStore from "assets/img/appstore.png"
import GooglePlay from "assets/img/googleplaystore.png"
import { ReactComponent as MetaMask } from "assets/img/metamask.svg"
import { useProps } from "contexts/PropsContext"
import { openLink } from "libs/functions"
import React from "react"

const WrapperContract = ({ children }: { children: any }) => {
  const { address, loadingContracts, invalid, incorrectNetwork } = useProps()

  return (
    <>
      {!loadingContracts ? (
        <>
          {address && !invalid ? (
            <>{children}</>
          ) : (
            <>
              {incorrectNetwork ? (
                <div className="grid w-full grid-cols-1 gap-20">
                  <div className="w-full text-center text-16 text-white-60">
                    Make sure to switch to the Ethereum Mainnet to be able to
                    Mint.
                  </div>
                  <div className="flex w-full justify-center">
                    <MetaMask className="h-80 w-80" />
                  </div>
                </div>
              ) : (
                <div className="grid w-full grid-cols-1 gap-20">
                  <div className="w-full text-center text-16 text-white-60">
                    Ensure to have MetaMask plugin downloaded on Google Chrome
                    or using the MetaMask App on your smart phone.
                  </div>
                  <div className="w-full text-center text-16 text-white-60">
                    Click on the FOX ICON BELOW if you are on your Mobile and
                    have MetaMask App installed.
                  </div>
                  <div className="flex w-full justify-center">
                    <button
                      onClick={(e) =>
                        openLink(
                          e,
                          "https://metamask.app.link/dapp/wingwars.io"
                        )
                      }
                    >
                      <MetaMask className="h-80 w-80" />
                    </button>
                  </div>
                  <div className="w-full text-center text-16 text-white-60">
                    or...
                  </div>
                  <div className="flex w-full flex-wrap items-center justify-center gap-20">
                    <button
                      onClick={(e) =>
                        openLink(
                          e,
                          "https://play.google.com/store/apps/details?id=io.metamask"
                        )
                      }
                      className="w-full sm:w-[160px]"
                    >
                      <img
                        src={GooglePlay}
                        alt=""
                        className="w-full rounded-[6px]"
                      />
                    </button>
                    <button
                      onClick={(e) =>
                        openLink(
                          e,
                          "https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202"
                        )
                      }
                      className="w-full sm:w-[160px]"
                    >
                      <img
                        src={AppStore}
                        alt=""
                        className="w-full rounded-[6px]"
                      />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <div className="flex w-full justify-center">
          <button
            onClick={(e) => openLink(e, "https://metamask.io/")}
            className="flex h-50 items-center gap-10 rounded-full bg-white px-20"
          >
            <MetaMask className="w-22" />
            <span className="flex text-14 font-black text-grey">
              Loading Contract
            </span>
          </button>
        </div>
      )}
    </>
  )
}

export default WrapperContract
