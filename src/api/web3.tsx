import contract from "libs/abi/contract.json"
import contract_staking from "libs/abi/contract_staking.json"
import { ADDR } from "libs/constants"

export const loadContract = async (ethereum: any) => {
  return await new ethereum.Contract(contract, ADDR.NFT)
}

export const loadContractStaking = async (ethereum: any) => {
  return await new ethereum.Contract(contract_staking, ADDR.STAKING)
}
