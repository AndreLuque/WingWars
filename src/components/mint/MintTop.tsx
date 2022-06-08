import { useEthers, useInterval } from "@usedapp/core"
import Connect from "components/connect/Connect"
import WrapperContract from "components/wrapper/WrapperContract"
import { useProps } from "contexts/PropsContext"
import { ADDR } from "libs/constants"
import React, { useEffect, useState } from "react"
import { MdAdd, MdRemove } from "react-icons/md"
import NumberFormat from "react-number-format"
import { toast } from "react-toastify"
import BannerImage from "utils/elements/BannerImage"

const MintTop = () => {
  const { address, balance, contract, ethereum, web3, setAddress, setLoading } =
    useProps()

  const [minted, setMinted] = useState(0)
  const [total] = useState(1000)

  // 0.1 ether goldlist, 0.15 whitelist, 0.2 public
  // const [price] = useState(0.2)

  const [count, setCount] = useState(1)

  // 3 goldlist, 5 whitelist, 10 public
  const [max] = useState(3)

  const [enabled] = useState(true)

  const { activateBrowserWallet, account } = useEthers()

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [contract])

  useEffect(() => {
    setAddress(account ? account : "")
  }, [account])

  useInterval(() => {
    onLoad()
  }, 30000)

  const onLoad = async () => {
    setLoading(false)

    if (contract) {
      const newMinted = await contract.methods
        .totalSupply()
        .call()
        .then((res: any) => res)
        .catch((error: any) => {
          console.log(error.response)
        })

      if (mounted && newMinted) {
        setMinted(newMinted)
      }
    }
  }

  const onMint = async () => {
    if (!enabled) {
      toast.error("Minting is not yet open")
      return
    }

    if (!address) {
      activateBrowserWallet()
      toast.error("Please login")
      return
    }

    let networkId = ethereum.networkVersion
    if (networkId !== "1") {
      toast.error("Switch to Ethereum Mainnet")
      //return
    }

    if (balance === undefined) {
      toast.error("Insufficient balance to mint")
      return
    }

    if (!(count >= 1 && count <= max)) {
      toast.error(`Select between 1 and ${max} nft's to mint`)
      return
    }

    const sale_state = await contract.methods.saleState().call()

    if (sale_state !== "0") {
      if (sale_state === "1") {
        const url = "https://andreluque.github.io/whitelist.json"

        const json = await fetch(url)
          .then((res: any) => res.json())
          .catch(() => {
            toast.error("Error retrieving whitelisted addresses!")
          })

        if (json) {
          const found = json
            .map((entry: any) => entry.toLowerCase())
            .includes(address.toLowerCase(), 0)

          if (found) {
            onOGListMint().catch((e: any) => {
              if (e.message.includes("insufficient funds")) {
                toast.error("You have Insufficient Funds to mint this NFT")
              } else if (e.message.includes("paused")) {
                toast.error("Sale is not open yet!")
              } else {
                alert(e.message)
              }
            })
          } else {
            toast.error("Minting not available")
          }
        }
      } else if (sale_state === "2") {
        const url = "https://andreluque.github.io/whitelist.json"

        const json = await fetch(url)
          .then((res: any) => res.json())
          .catch(() => {
            toast.error("Error retrieving whitelisted addresses")
          })

        if (json) {
          const found = json
            .map((entry: any) => entry.toLowerCase())
            .includes(address.toLowerCase(), 0)

          if (found) {
            onWhitelistMint().catch((e: any) => {
              if (e.message.includes("insufficient funds")) {
                toast.error("You have Insufficient Funds to mint this NFT")
              } else if (e.message.includes("paused")) {
                toast.error("Sale is not open yet")
              } else {
                alert(e.message)
              }
            })
          } else {
            toast.error("Minting not available")
          }
        }
      } else {
        onPublicSaleMint().catch((e: any) => {
          if (e.message.includes("insufficient funds")) {
            toast.error("You have Insufficient Funds to mint this NFT")
          } else if (e.message.includes("paused")) {
            toast.error("Sale is not open yet")
          } else {
            alert(e.message)
          }
        })
      }
    } else {
      toast.error("Sale is not open yet!")
    }
  }

  const onOGListMint = async () => {
    const mint_fee = await contract.methods.mintCost().call()
    const max_mint = await contract.methods.maxMint().call()
    const balance = await contract.methods.balanceOf(address).call()
    if (Math.floor(balance) + Math.floor(count) > max_mint) {
      toast.error(`Maximum of ${max_mint} Mints per Address`)
      return
    }

    const message = web3.utils.soliditySha3(ADDR.NFT, account)

    const sign = await web3.eth.accounts.sign(
      message,
      "603c13734233792745d50a6c9c0a55a075ad8b919d3c57d024e72a98a2d86353"
    )

    const r = sign["r"]
    const s = sign["s"]
    const v = sign["v"]

    const gas = await contract.methods
      .oglistMint(count, v, r, s)
      .estimateGas({ from: address, value: mint_fee * count })

    const method = await contract.methods
      .oglistMint(count, v, r, s)
      .send({ from: address, value: mint_fee * count, gas: gas })
      .then((res: any) => res)
      .catch((err: any) => {
        console.log(err)
      })

    if (!method) {
      toast.error("Was not able to complete the transaction")
    } else {
      const totalSupply = await contract.methods.totalSupply().call()
      setMinted(totalSupply)
      toast.success("You have successfully minted!")
    }
  }

  const onWhitelistMint = async () => {
    const mint_fee = await contract.methods.mintCost().call()
    const max_mint = await contract.methods.maxMint().call()
    const balance = await contract.methods.balanceOf(address).call()
    if (Math.floor(balance) + Math.floor(count) > max_mint) {
      toast.error(`Maximum of ${max_mint} Mints per Address`)
      return
    }

    const message = web3.utils.soliditySha3(ADDR.NFT, account)

    const sign = await web3.eth.accounts.sign(
      message,
      "603c13734233792745d50a6c9c0a55a075ad8b919d3c57d024e72a98a2d86353"
    )

    const r = sign["r"]
    const s = sign["s"]
    const v = sign["v"]

    const gas = await contract.methods
      .whitelistMint(count, v, r, s)
      .estimateGas({ from: address, value: mint_fee * count })

    const method = await contract.methods
      .whitelistMint(count, v, r, s)
      .send({ from: address, value: mint_fee * count, gas: gas })
      .then((res: any) => res)
      .catch((err: any) => {
        console.log(err)
      })

    if (!method) {
      toast.error("Was not able to complete the transaction")
    } else {
      const totalSupply = await contract.methods.totalSupply().call()
      setMinted(totalSupply)
      toast.success("You have successfully minted!")
    }
  }

  const onPublicSaleMint = async () => {
    const mint_fee = await contract.methods.mintCost().call()
    alert(mint_fee)
    const max_mint = await contract.methods.maxMint().call()
    const balance = await contract.methods.balanceOf(address).call()

    if (Math.floor(balance) + Math.floor(count) > max_mint) {
      toast.error(`Maximum of ${max_mint} Mints per Address`)
      return
    }

    const gas = await contract.methods
      .publicSaleMint(count)
      .estimateGas({ from: address, value: mint_fee * count })

    const method = await contract.methods
      .publicSaleMint(count)
      .send({ from: address, value: mint_fee * count, gas: gas })
      .then((res: any) => res)
      .catch((err: any) => {
        console.log(err)
      })

    if (!method) {
      toast.error("Was not able to complete the transaction")
    } else {
      const totalSupply = await contract.methods.totalSupply().call()
      setMinted(totalSupply)
      toast.success("You have successfully minted!")
    }
  }

  return (
    <>
      <div className="relative grid w-full grid-cols-1 pt-[120px] sm:min-h-[100vh] sm:pt-[130px] xl:pt-[140px]">
        <div className="absolute top-0 bottom-0 left-[50%] w-screen translate-x-[-50%] transform overflow-hidden bg-grey">
          <div className="absolute bottom-0 left-0 h-[800px] w-[800px] translate-x-[-50%] translate-y-[50%] transform rounded-full bg-red blur-[600px] filter"></div>{" "}
          <div className="absolute top-0 right-0 h-[800px] w-[800px] translate-x-[50%] translate-y-[-50%] transform rounded-full bg-blue blur-[600px] filter"></div>
        </div>
        <div className="relative z-20 grid w-full grid-cols-1">
          <div className="z-20 flex w-full items-start justify-center">
            <div className="grid w-[700px] max-w-full grid-cols-1">
              <div className="mb-16 w-full text-center text-24 font-black leading-[110%] text-white sm:mb-30 sm:text-[48px] md:text-[64px]">
                Mint your Solider for An upcoming War
              </div>
              <div className="flex w-full justify-center">
                <div className="mb-20 w-[530px] max-w-full text-center text-14 text-white-60 sm:mb-30 sm:text-16">
                  Chickens and Pigeons vie for the absolute control of the
                  planet, and the title of the deadliest beasts.
                </div>
              </div>
              <WrapperContract>
                {address ? (
                  <div className="flex w-full flex-wrap items-center justify-center gap-24">
                    <div className="flex w-full items-center justify-center gap-1 lg:w-auto">
                      <div className="flex h-56 items-center rounded-l-full bg-white-10 px-24">
                        <span className="text-16 font-bold text-white-60">
                          Mints
                        </span>
                      </div>
                      <div className="flex h-56 items-center rounded-r-full bg-white-10 px-24">
                        <span className="text-16 font-bold text-white">
                          <NumberFormat
                            value={total - minted}
                            displayType={"text"}
                            thousandSeparator={true}
                            className="text-16"
                          />{" "}
                          left
                        </span>
                      </div>
                    </div>
                    <div className="lg:w-aut flex w-full justify-center">
                      <button
                        name="Mint"
                        onClick={() => onMint()}
                        className="flex h-56 w-[200px] items-center justify-center rounded-full bg-red px-20 text-16 font-bold text-white"
                      >
                        Mint
                        {/* ~{" "} */}
                        {/* <NumberFormat
                        value={price * count}
                        displayType={"text"}
                        thousandSeparator={true}
                        className="text-16"
                      /> */}
                      </button>
                    </div>
                    <div className="lg:w-aut flex w-full justify-center">
                      <div className="flex items-center gap-1">
                        <button
                          name="Remove"
                          onClick={() => setCount(Math.max(1, count - 1))}
                          className="group flex h-56 items-center rounded-l-full bg-white-20 px-24 hover:bg-white"
                        >
                          <MdRemove className="text-24 font-bold text-white-60 group-hover:text-grey" />
                        </button>
                        <div className="flex h-56 w-80 items-center justify-center bg-white-10 px-24">
                          <span className="text-16 font-bold text-white">
                            <NumberFormat
                              value={count}
                              displayType={"text"}
                              thousandSeparator={true}
                              className="text-16"
                            />
                          </span>
                        </div>
                        <button
                          name="Add"
                          onClick={() => setCount(Math.min(max, count + 1))}
                          className="group flex h-56 items-center rounded-r-full bg-white-20 px-24 hover:bg-white"
                        >
                          <MdAdd className="text-24 font-bold text-white-60 group-hover:text-grey" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex w-full justify-center">
                    <Connect />
                  </div>
                )}
              </WrapperContract>
            </div>
          </div>
          <BannerImage free={true} desktop={true} />
        </div>
      </div>
    </>
  )
}

export default MintTop
