import { useEthers } from "@usedapp/core"
import { createCtx } from "contexts/Context"
import abiContract from "libs/abi/contract.json"
import abiContractStaking from "libs/abi/contract_staking.json"
import { ADDR, SELECTED_NETWORK } from "libs/constants"
import { useInterval } from "libs/functions"
import { getterAddress, setterAddress } from "libs/functions/cookies"
import { TokenInterface } from "libs/interfaces"
import moment from "moment-timezone"
import React, { createContext, useEffect, useState } from "react"
import Web3 from "web3"

type PropsContextType = {
  address: string
  authenticated: boolean
  balance: number
  contract: any
  contractStaking: any
  duration: moment.Duration
  earned: number
  ethereum: any
  incorrectNetwork: boolean
  invalid: boolean
  inWallet: string
  loading: boolean
  loadingContracts: boolean
  path: string
  ready: boolean
  route: boolean
  tokenActive: string
  tokens: TokenInterface[]
  tokensStaked: TokenInterface[]
  web3: any
  whitelist: boolean
  setAddress: any
  setBalance: any
  setEarned: any
  setLoading: any
  setPath: any
  setTokenActive: any
}

export const [useProps, CtxProvider] = createCtx<PropsContextType>()

export const PropsContext = createContext<PropsContextType | undefined>(
  undefined
)

export const PropsProvider = ({ children }: { children: React.ReactNode }) => {
  const { ethereum } = window

  const [address, setAddress] = useState(getterAddress())
  const [authenticated] = useState(false)
  const [balance, setBalance] = useState(0)
  const [contract, setContract] = useState<any>()
  const [contractStaking, setContractStaking] = useState<any>()
  const [diff, setDiff] = useState(
    moment.tz("2022-02-02 20:22", "Europe/Amsterdam").valueOf() -
      moment().valueOf()
  )
  const [duration, setDuration] = useState(moment.duration(0, "milliseconds"))
  const [earned, setEarned] = useState(0)
  const [incorrectNetwork, setIncorrectNetwork] = useState(false)
  const [invalid, setInvalid] = useState(true)
  const [interval] = useState(1000)
  const [inWallet, setInWallet] = useState("0")
  const [loading, setLoading] = useState(true)
  const [loadingContracts, setLoadingContracts] = useState(true)
  const [path, setPath] = useState(window.location.pathname)
  const [ready, setReady] = useState(Math.floor(diff / 1000) < 0)
  const [route] = useState(
    parseInt(process.env.REACT_APP_ADMIN ?? "") ? true : false
  )
  const [tokenActive, setTokenActive] = useState("")
  const [tokens, setTokens] = useState<TokenInterface[]>([])
  const [tokensStaked, setTokensStaked] = useState<TokenInterface[]>([])
  const [web3] = useState(new Web3(ethereum))
  const [whitelist] = useState(true)

  const { activateBrowserWallet, account } = useEthers()

  useEffect(() => {
    setAddress(account ? account : "")
  }, [account])

  useEffect(() => {
    setterAddress(address)
  }, [address])

  useEffect(() => {
    console.log(contract, contractStaking)

    setLoading(false)

    if (contract !== undefined && contractStaking !== undefined) {
      onLoad()
    }
  }, [contract, contractStaking])

  useEffect(() => {
    if (Math.floor(diff / 1000) >= 0) {
      setDuration(moment.duration(diff, "milliseconds"))
    } else {
      setReady(true)
    }
  }, [diff])

  useEffect(() => {
    onLoadWeb3()
  }, [ethereum])

  useEffect(() => {
    onContract()
  }, [address, web3])

  useInterval(() => {
    setDiff(diff - interval)
  }, 1000)

  const onContract = () => {
    const newAbiContract: any = abiContract
    const newAbiContractStaking: any = abiContractStaking

    const newContract = new web3.eth.Contract(newAbiContract, ADDR.NFT)
    console.log(newContract)

    setContract(newContract)

    const newContractStaking = new web3.eth.Contract(
      newAbiContractStaking,
      ADDR.STAKING
    )
    setContractStaking(newContractStaking)
  }

  const onLoad = async () => {
    setLoadingContracts(false)

    if (contract) {
      const newMinted = await contract.methods
        .totalSupply()
        .call()
        .then((res: any) => res)
        .catch((error: any) => {
          console.log(error.response)
        })

      if (newMinted) {
        setInvalid(false)
      }
    } else {
      setInvalid(true)
    }

    setInvalid(false)

    if (!address) {
      activateBrowserWallet()
      return
    }

    const balance = await contract.methods.balanceOf(account).call()

    const newTokens = []

    for (let i = 0; i < balance; i++) {
      let newToken = await contract.methods
        .tokenOfOwnerByIndex(account, i)
        .call()
      newTokens.push(newToken)
    }

    setTokens(newTokens)

    setInWallet(balance.toString())

    const stakedTokens = await contractStaking.methods
      .seeStakedTokens(account)
      .call()

    setTokensStaked(stakedTokens)

    if (stakedTokens.length > 0) {
      let rewards: number = await contractStaking.methods
        .calculateAllRewards(account)
        .call()

      rewards = rewards * 10 ** -9

      setEarned(rewards)
    }
  }

  const onLoadWeb3 = async () => {
    if (!ethereum) {
      return
    }

    await window.ethereum.enable()

    let networkId = ethereum.networkVersion

    if (networkId !== SELECTED_NETWORK) {
      setIncorrectNetwork(true)
    }
  }

  return (
    <>
      <CtxProvider
        value={{
          address,
          authenticated,
          balance,
          contract,
          contractStaking,
          duration,
          earned,
          ethereum,
          incorrectNetwork,
          invalid,
          inWallet,
          loading,
          loadingContracts,
          path,
          ready,
          route,
          tokenActive,
          tokensStaked,
          tokens,
          web3,
          whitelist,
          setAddress,
          setBalance,
          setEarned,
          setLoading,
          setPath,
          setTokenActive
        }}
      >
        {children}
      </CtxProvider>
    </>
  )
}

export default PropsProvider
