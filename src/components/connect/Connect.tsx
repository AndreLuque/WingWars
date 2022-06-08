import { useEthers, useEtherBalance } from "@usedapp/core"
import { ReactComponent as MetaMask } from "assets/img/metamask.svg"
import { useProps } from "contexts/PropsContext"
import { openLink } from "libs/functions"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Wrapper from "utils/wrapper/Wrapper"

const Connect = () => {
  const {
    address,
    incorrectNetwork,
    invalid,
    loadingContracts,
    setAddress,
    setBalance
  } = useProps()

  const { utils } = require("ethers")

  const { activateBrowserWallet, deactivate, account } = useEthers()

  const [openConnect, setOpenConnect] = useState(false)

  const [addr, setAddr] = useState("")

  const eth = useEtherBalance(addr)

  useEffect(() => {
    setAddr(address ? address : "")
  }, [address])

  useEffect(() => {
    setAddress(account ? account : "")
    setAddr(account ? account : "")
  }, [account])

  useEffect(() => {
    if (eth) {
      onEth(eth)
    } else {
      setBalance(0)
    }
  }, [eth])

  const onActivate = () => {
    activateBrowserWallet()
  }

  const onDeactivate = () => {
    deactivate()
  }

  const onEth = (value: any) => {
    const balanceString = utils.formatEther(value).substring(0, 7)
    const newBalance = Math.round(parseFloat(balanceString) * 10000) / 10000

    setBalance(newBalance)
  }

  const onDisconnect = () => {
    onDeactivate()
    setOpenConnect(false)
  }

  return (
    <>
      {!loadingContracts ? (
        <>
          {!invalid ? (
            <>
              {addr ? (
                <div className="relative w-full md:w-auto">
                  <button
                    name="Connected"
                    onClick={() => setOpenConnect(!openConnect)}
                    className="relative z-30"
                  >
                    <div className="flex h-50 items-center gap-10 rounded-full bg-white px-20">
                      <div className="h-8 w-8 rounded-full bg-blue"></div>
                      <span className="flex">
                        <span className="truncate overflow-ellipsis text-14 font-black text-grey sm:text-16 md:text-18">
                          {addr.slice(0, 4)}
                        </span>
                        <span className="hidden truncate overflow-ellipsis text-14 font-black text-grey sm:flex sm:text-16 md:text-18">
                          ...{addr.slice(addr.length - 4, addr.length)}
                        </span>
                      </span>
                    </div>
                  </button>
                  <Wrapper open={openConnect}>
                    <div
                      onClick={() => setOpenConnect(false)}
                      className="fixed top-0 left-0 z-10 h-full w-full"
                    ></div>
                  </Wrapper>
                  <button
                    name="Disconnect"
                    onClick={() => onDisconnect()}
                    className={`absolute top-0 z-20 w-full transition-all duration-300 ${
                      openConnect
                        ? "opacity-1 top-44 left-0 sm:top-[70px]"
                        : "left-0 top-0 opacity-0"
                    }`}
                  >
                    <div className="flex h-50 w-full items-center justify-center rounded-full bg-white px-20 text-14 font-black text-grey">
                      DISCONNECT
                    </div>
                  </button>
                </div>
              ) : (
                <button
                  name="Connect"
                  onClick={(e) =>
                    openLink(e, "https://metamask.app.link/dapp/wingwars.io")
                  }
                  className="flex h-50 items-center gap-10 rounded-full bg-white px-20 sm:w-[180px]"
                >
                  <MetaMask className="w-22" />
                  <span className="hidden text-14 font-black text-grey sm:flex">
                    Connect wallet
                  </span>
                </button>
              )}
            </>
          ) : (
            <>
              {incorrectNetwork ? (
                <button
                  name="Connect"
                  onClick={() => toast.error("Please switch to Mainnet")}
                  className="flex h-50 items-center gap-10 rounded-full bg-white px-20 sm:w-[180px]"
                >
                  <MetaMask className="w-22" />
                  <span className="hidden text-14 font-black text-grey sm:flex">
                    Mainnet
                  </span>
                </button>
              ) : (
                <button
                  name="Connect"
                  onClick={() => onActivate()}
                  className="flex h-50 items-center gap-10 rounded-full bg-white px-20 sm:w-[180px]"
                >
                  <MetaMask className="w-22" />
                  <span className="hidden text-14 font-black text-grey sm:flex">
                    Metamask
                  </span>
                </button>
              )}
            </>
          )}
        </>
      ) : (
        <button
          onClick={(e) => openLink(e, "https://metamask.io/")}
          className="flex h-50 items-center gap-10 rounded-full bg-white px-20"
        >
          <MetaMask className="w-22" />
          <span className="flex text-14 font-black text-grey">Loading</span>
        </button>
      )}
    </>
  )
}

export default Connect
