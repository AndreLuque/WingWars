import { useEthers } from "@usedapp/core"
import Connect from "components/connect/Connect"
import WrapperContract from "components/wrapper/WrapperContract"
import { useProps } from "contexts/PropsContext"
import { ADDR } from "libs/constants"
import React, { useEffect, useState } from "react"
import NumberFormat from "react-number-format"
import { toast } from "react-toastify"
import BannerImage from "utils/elements/BannerImage"
import Wrapper from "utils/wrapper/Wrapper"

const StakeTop = () => {
  const {
    address,
    contract,
    contractStaking,
    earned,
    inWallet,
    tokenActive,
    tokens,
    tokensStaked,
    setEarned,
    setLoading,
    setTokenActive
  } = useProps()

  const [staked, setStaked] = useState(false)

  const { activateBrowserWallet, account } = useEthers()

  useEffect(() => {
    setTokenActive("")
  }, [staked])

  const onClaim = async () => {
    if (!address) {
      activateBrowserWallet()
      toast.error("Please login")
      return
    }

    const stakedTokens = await contractStaking.methods
      .seeStakedTokens(address)
      .call()

    if (stakedTokens.length === 0) {
      toast.error("No Tokens Staked!")
      return
    }

    if (earned === 0) {
      toast.error("No Rewards to Claim!")
      return
    }

    const gas = await contractStaking.methods
      .getAllRewards()
      .estimateGas({ from: account })
      .catch((e: any) => {
        toast.error(e.message)
      })
    if (gas) {
      await contractStaking.methods
        .getAllRewards()
        .send({ from: account, gas: gas })
        .on("receipt", async () => {
          setEarned(0)
          setLoading(false)
          toast.success("Rewards have been claimed successfully!")
        })
    }
  }

  const onStake = async () => {
    if (!address) {
      activateBrowserWallet()
      toast.error("Please login")
      return
    }

    if (!tokenActive) {
      toast.error("Enter a Token ID to stake")
      return
    }

    const owner = await contract.methods.ownerOf(tokenActive).call()

    if (owner.toLowerCase() !== address.toLowerCase()) {
      toast.error("You are not the owner of this Token ID!")
      return
    }

    const approvedList = await contract.methods.getApproved(tokenActive).call()
    if (!approvedList.includes(ADDR.STAKING)) {
      const gas = await contract.methods
        .approve(ADDR.STAKING, tokenActive)
        .estimateGas({ from: account })
        .catch((e: any) => {
          toast.error(e.message)
        })
      if (gas) {
        await contract.methods
          .approve(ADDR.STAKING, tokenActive)
          .send({ from: account, gas: gas })
          .on("receipt", async function () {
            const gas2 = await contractStaking.methods
              .deposit(tokenActive)
              .estimateGas({ from: account })
              .catch((e: any) => {
                toast.error(e.message)
              })

            if (gas2) {
              await contractStaking.methods
                .deposit(tokenActive)
                .send({ from: account, gas: gas2 })
                .on("receipt", async function () {
                  setLoading(false)
                  toast.success("Token has been successfully staked!")
                })
            }
          })
      }
    } else {

      //alert(await contractStaking.methods
        //        .decimals()
          //      .call())

      const gas2 = await contractStaking.methods
        .deposit(tokenActive)
        .estimateGas({ from: account })
        .catch((e: any) => {
          toast.error(e.message)
          console.log(contractStaking.methods)
        })
      if (gas2) {
        await contractStaking.methods
          .deposit(tokenActive)
          .send({ from: account, gas: gas2 })
          .on("receipt", async function () {
            setLoading(false)
            toast.success("Token has been successfully staked!")
          })
      }
    }
  }

  const onUnstake = async () => {
    if (!address) {
      activateBrowserWallet()
      toast.error("Please login")
      return
    }

    if (!tokenActive) {
      toast.error("Enter a Token ID to unstake")
      return
    }

    const gas = await contractStaking.methods
      .withdraw(tokenActive)
      .estimateGas({ from: account })
      .catch((e: any) => {
        toast.error(e.message)
      })
    if (gas) {
      await contractStaking.methods
        .withdraw(tokenActive)
        .send({ from: account, gas: gas })
        .on("receipt", async function () {
          setLoading(false)
          toast.success("Token has been successfully unstaked!")
        })
    }
  }

  const onStakeAll = async () => {
    if (!address) {
      activateBrowserWallet()
      toast.error("Please login")
      return
    }

    if (tokens.length === 0) {
      toast.error("You don't have any tokens to stake")
      return
    }

    const isApproved = await contract.methods
      .isApprovedForAll(account, ADDR.STAKING)
      .call()

    if (!isApproved) {
      const gas = await contract.methods
        .setApprovalForAll(ADDR.STAKING, true)
        .estimateGas({ from: account })
        .catch((e: any) => {
          toast.error(e.message)
        })

      if (gas) {
        await contract.methods
          .setApprovalForAll(ADDR.STAKING, true)
          .send({ from: account, gas: gas })
          .on("receipt", async function () {
            const gas2 = await contractStaking.methods
              .depositAll()
              .estimateGas({ from: account })
              .catch((e: any) => {
                toast.error(e.message)
              })
            if (gas2) {
              await contractStaking.methods
                .depositAll()
                .send({ from: account, gas: gas2 })
                .on("receipt", async function () {
                  setLoading(false)
                  toast.success("Tokens have been successfully staked!")
                })
            }
          })
      }
    } else {
      const gas = await contractStaking.methods
        .depositAll()
        .estimateGas({ from: account })
        .catch((e: any) => {
          toast.error(e.message)
        })

      if (gas) {
        await contractStaking.methods
          .depositAll()
          .send({ from: account, gas: gas })
          .on("receipt", async function () {
            setLoading(false)
            toast.success("Tokens have been successfully staked!")
          })
      }
    }
  }

  const onUnstakeAll = async () => {
    if (!address) {
      activateBrowserWallet()
      toast.error("Please login")
      return
    }

    if (tokensStaked.length === 0) {
      toast.error("You don't have any tokens to unstake")
      return
    }

    const gas = await contractStaking.methods
      .withdrawAll()
      .estimateGas({ from: account })
      .catch((e: any) => {
        toast.error(e.message)
      })
    if (gas) {
      await contractStaking.methods
        .withdrawAll()
        .send({ from: account, gas: gas })
        .on("receipt", async function () {
          setLoading(false)
          toast.success("Tokens have been successfully unstaked!")
        })
    }
  }

  return (
    <>
      <div className="relative grid w-full grid-cols-1 pt-[120px] sm:min-h-[100vh] sm:py-[130px] sm:pb-0 xl:pt-[140px]">
        <div className="absolute top-0 bottom-0 left-[50%] w-screen translate-x-[-50%] transform overflow-hidden bg-grey">
          <div className="absolute bottom-0 left-0 h-[800px] w-[800px] translate-x-[-50%] translate-y-[50%] transform rounded-full bg-red blur-[600px] filter"></div>{" "}
          <div className="absolute top-0 right-0 h-[800px] w-[800px] translate-x-[50%] translate-y-[-50%] transform rounded-full bg-blue blur-[600px] filter"></div>
        </div>
        <div className="relative grid w-full grid-cols-1">
          <div className="z-20 flex w-full items-start justify-center">
            <div className="grid w-[700px] max-w-full grid-cols-1">
              <div className="mb-16 w-full text-center text-24 font-black leading-[110%] text-white sm:mb-30 sm:text-[48px] md:text-[64px]">
                Stake your Soldiers for An upcoming War
              </div>
              <div className="flex w-full justify-center">
                <div className="mb-20 w-[530px] max-w-full text-center text-14 text-white-60 sm:mb-30 sm:text-16">
                  Chickens and Pigeons vie for the absolute control of the
                  planet, and the title of the deadliest beasts.
                </div>
              </div>
              <WrapperContract>
                {address ? (
                  <>
                    <div className="mb-32 flex w-full flex-wrap items-center justify-center gap-16">
                      <button
                        name="In wallet"
                        onClick={() => setStaked(false)}
                        className={`flex h-56 w-full items-center justify-center rounded-full px-20 text-16 font-bold sm:w-[200px] ${
                          !staked
                            ? "bg-white text-grey"
                            : "bg-white-10 text-white"
                        }`}
                      >
                        In Wallet ({inWallet})
                      </button>
                      <button
                        name="Staked"
                        onClick={() => setStaked(true)}
                        className={`flex h-56 w-full items-center justify-center rounded-full px-20 text-16 font-bold sm:w-[200px] ${
                          staked
                            ? "bg-white text-grey"
                            : "bg-white-10 text-white"
                        }`}
                      >
                        Staked ({tokensStaked.length})
                      </button>
                    </div>
                    <div className="mb-40 w-full overflow-hidden rounded-10 bg-white-10">
                      <div className="grid w-full grid-cols-1 gap-24 p-32">
                        <div className="flex w-full items-center justify-start gap-8">
                          <div className="text-16 font-bold text-white-60">
                            Token IDs:
                          </div>
                          <div className="text-16 font-bold text-white">
                            {staked
                              ? tokensStaked.length > 0
                                ? tokensStaked.join(", ")
                                : "No Tokens"
                              : tokens.length > 0
                              ? tokens.join(", ")
                              : "No Tokens"}
                          </div>
                        </div>
                        <div className="hidden h-[240px] w-full overflow-y-scroll"></div>
                        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1fr,auto]">
                          <div className="w-full rounded-full bg-white-10 px-20">
                            <input
                              type="text"
                              className="placeholder-white-60::placeholder flex h-56 w-full items-center text-16 font-bold text-white"
                              placeholder="Token ID"
                              value={tokenActive}
                              onChange={(e) => setTokenActive(e.target.value)}
                            />
                          </div>
                          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr,auto,auto]">
                            <div className="flex w-full items-center gap-12 md:w-auto">
                              <Wrapper open={staked}>
                                <button
                                  onClick={() => onUnstake()}
                                  name="Unstake"
                                  className="flex h-56 w-full items-center justify-center rounded-full bg-red px-24 text-16 font-bold text-white md:w-auto"
                                >
                                  Unstake
                                </button>
                              </Wrapper>
                              <Wrapper open={!staked}>
                                <button
                                  onClick={() => onStake()}
                                  name="Stake"
                                  className="flex h-56 w-full items-center justify-center rounded-full bg-blue px-24 text-16 font-bold text-white md:w-auto"
                                >
                                  Stake
                                </button>
                              </Wrapper>
                            </div>
                            <div className="hidden h-56 border-r-1 border-white-10 md:flex"></div>
                            {staked ? (
                              <button
                                onClick={() => onUnstakeAll()}
                                name="Unstake"
                                className="flex h-56 items-center justify-center rounded-full bg-white px-24 text-16 font-bold text-grey"
                              >
                                Unstake All ({tokensStaked.length})
                              </button>
                            ) : (
                              <button
                                onClick={() => onStakeAll()}
                                name="Unstake"
                                className="flex h-56 items-center justify-center rounded-full bg-white px-24 text-16 font-bold text-grey"
                              >
                                Stake All ({tokens.length})
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="grid w-full grid-cols-1 gap-24 bg-white-10 p-24 md:grid-cols-[1fr,auto]">
                        <div className="grid w-full grid-cols-1 gap-4">
                          <div className="grid w-full grid-cols-[auto,1fr] gap-10">
                            <div className="w-full">
                              <NumberFormat
                                value={earned}
                                displayType={"text"}
                                thousandSeparator={true}
                                className="text-18 font-black text-white"
                              />
                            </div>
                          </div>
                          <div className="w-full text-14 text-white-60">
                            Total Earned $CORN
                          </div>
                        </div>
                        <button
                          onClick={() => onClaim()}
                          name="Claim"
                          className="flex h-56 items-center justify-center rounded-full bg-blue px-24 text-16 font-bold text-white"
                        >
                          Claim Rewards
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex w-full justify-center">
                    <Connect />
                  </div>
                )}
              </WrapperContract>
            </div>
          </div>
          <Wrapper open={!address}>
            <BannerImage free={true} desktop={true} />
          </Wrapper>
        </div>
      </div>
    </>
  )
}

export default StakeTop
