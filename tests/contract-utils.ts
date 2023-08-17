import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll,
  CratorRigistered,
  SocialTokenBought,
  SocialTokenLaunched,
  SocialTokenListed,
  SocialTokenMinted,
  SocialTokenUnlisted,
  TransferBatch,
  TransferSingle,
  URI
} from "../generated/Contract/Contract"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createCratorRigisteredEvent(
  id: BigInt,
  creator: Address,
  URI: string
): CratorRigistered {
  let cratorRigisteredEvent = changetype<CratorRigistered>(newMockEvent())

  cratorRigisteredEvent.parameters = new Array()

  cratorRigisteredEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  cratorRigisteredEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  cratorRigisteredEvent.parameters.push(
    new ethereum.EventParam("URI", ethereum.Value.fromString(URI))
  )

  return cratorRigisteredEvent
}

export function createSocialTokenBoughtEvent(
  id: BigInt,
  owner: Address,
  buyer: Address,
  amount: BigInt,
  price: BigInt
): SocialTokenBought {
  let socialTokenBoughtEvent = changetype<SocialTokenBought>(newMockEvent())

  socialTokenBoughtEvent.parameters = new Array()

  socialTokenBoughtEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  socialTokenBoughtEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  socialTokenBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  socialTokenBoughtEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  socialTokenBoughtEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return socialTokenBoughtEvent
}

export function createSocialTokenLaunchedEvent(
  id: BigInt,
  owner: Address,
  price: BigInt
): SocialTokenLaunched {
  let socialTokenLaunchedEvent = changetype<SocialTokenLaunched>(newMockEvent())

  socialTokenLaunchedEvent.parameters = new Array()

  socialTokenLaunchedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  socialTokenLaunchedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  socialTokenLaunchedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return socialTokenLaunchedEvent
}

export function createSocialTokenListedEvent(
  id: BigInt,
  owner: Address,
  amount: BigInt,
  price: BigInt
): SocialTokenListed {
  let socialTokenListedEvent = changetype<SocialTokenListed>(newMockEvent())

  socialTokenListedEvent.parameters = new Array()

  socialTokenListedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  socialTokenListedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  socialTokenListedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  socialTokenListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return socialTokenListedEvent
}

export function createSocialTokenMintedEvent(
  id: BigInt,
  owner: Address,
  amount: BigInt,
  resaleRoyaltyPercentage: BigInt
): SocialTokenMinted {
  let socialTokenMintedEvent = changetype<SocialTokenMinted>(newMockEvent())

  socialTokenMintedEvent.parameters = new Array()

  socialTokenMintedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  socialTokenMintedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  socialTokenMintedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  socialTokenMintedEvent.parameters.push(
    new ethereum.EventParam(
      "resaleRoyaltyPercentage",
      ethereum.Value.fromUnsignedBigInt(resaleRoyaltyPercentage)
    )
  )

  return socialTokenMintedEvent
}

export function createSocialTokenUnlistedEvent(
  id: BigInt,
  owner: Address,
  amount: BigInt
): SocialTokenUnlisted {
  let socialTokenUnlistedEvent = changetype<SocialTokenUnlisted>(newMockEvent())

  socialTokenUnlistedEvent.parameters = new Array()

  socialTokenUnlistedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  socialTokenUnlistedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  socialTokenUnlistedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return socialTokenUnlistedEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}
