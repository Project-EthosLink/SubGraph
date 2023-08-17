import { BigInt } from "@graphprotocol/graph-ts";
import {
  CratorRigistered as CratorRigisteredEvent,
  SocialTokenBought as SocialTokenBoughtEvent,
  SocialTokenLaunched as SocialTokenLaunchedEvent,
  SocialTokenListed as SocialTokenListedEvent,
  SocialTokenMinted as SocialTokenMintedEvent,
  SocialTokenUnlisted as SocialTokenUnlistedEvent,
} from "../generated/Contract/Contract";
import { SocialTokenHolding, Creator } from "../generated/schema";

export function handleCratorRigistered(event: CratorRigisteredEvent): void {
  let entity = new Creator(event.params.id.toString());
  entity.CreatorAddress = event.params.creator;
  entity.URI = event.params.URI;
  entity.tokenId = event.params.id;
  entity.save();
}

export function handleSocialTokenBought(event: SocialTokenBoughtEvent): void {
  let seller = SocialTokenHolding.load(
    event.params.id.toString() + "-" + event.params.owner.toString()
  );
  if (seller != null) {
    let buyer = SocialTokenHolding.load(
      event.params.id.toString() + "-" + event.params.buyer.toString()
    );
    if (buyer != null) {
      buyer.AmountOwnedByHolder = buyer.AmountOwnedByHolder.plus(
        event.params.amount
      );
      buyer.save();
    } else {
      let buyer = new SocialTokenHolding(
        event.params.id.toString() + "-" + event.params.buyer.toString()
      );
      buyer.SocialTokenId = event.params.id;
      buyer.Creator = seller.Creator;
      buyer.Holder = event.params.buyer;
      buyer.IsLaunched = true;
      buyer.URI = seller.URI;
      buyer.LaunchingPrice = seller.LaunchingPrice;
      buyer.TotalAmountMinted = seller.TotalAmountMinted;
      buyer.AmountAvailbleforSale = seller.AmountAvailbleforSale;
      buyer.AmountOwnedByHolder = event.params.amount;
      buyer.AmountListedByHolder = BigInt.fromI32(0);
      buyer.PriceSetByHolder = BigInt.fromI32(0);
      buyer.ReSaleRoyalty = seller.ReSaleRoyalty;
      buyer.Transferrable = seller.Transferrable;
      buyer.save();
    }
    seller.AmountOwnedByHolder = seller.AmountOwnedByHolder.minus(
      event.params.amount
    );
    seller.AmountListedByHolder = seller.AmountListedByHolder.minus(
      event.params.amount
    );
    seller.AmountAvailbleforSale = seller.AmountAvailbleforSale.minus(
      event.params.amount
    );
    seller.save();
  }
}

export function handleSocialTokenLaunched(
  event: SocialTokenLaunchedEvent
): void {
  let token = SocialTokenHolding.load(
    event.params.id.toString() + "-" + event.params.owner.toString()
  );
  if (token != null) {
    token.IsLaunched = true;
    token.LaunchingPrice = event.params.price;
    token.AmountAvailbleforSale = token.AmountOwnedByHolder;
    token.AmountListedByHolder = token.AmountOwnedByHolder;
    token.PriceSetByHolder = event.params.price;
    token.save();
  }
}

export function handleSocialTokenListed(event: SocialTokenListedEvent): void {
  let token = SocialTokenHolding.load(
    event.params.id.toString() + "-" + event.params.owner.toString()
  );
  if (token != null) {
    token.AmountAvailbleforSale = token.AmountAvailbleforSale.plus(
      event.params.amount
    );
    token.AmountListedByHolder = token.AmountListedByHolder.plus(
      event.params.amount
    );
    token.PriceSetByHolder = event.params.price;
    token.save();
  }
}

export function handleSocialTokenMinted(event: SocialTokenMintedEvent): void {
  let token = new SocialTokenHolding(
    event.params.id.toString() + "-" + event.params.owner.toString()
  );
  token.SocialTokenId = event.params.id;
  token.Creator = event.params.owner;
  token.Holder = event.params.owner;
  token.IsLaunched = false;
  token.URI = event.params.URI;
  token.LaunchingPrice = BigInt.fromI32(0);
  token.TotalAmountMinted = event.params.amount;
  token.AmountAvailbleforSale = BigInt.fromI32(0);
  token.AmountOwnedByHolder = event.params.amount;
  token.AmountListedByHolder = BigInt.fromI32(0);
  token.PriceSetByHolder = BigInt.fromI32(0);
  token.ReSaleRoyalty = event.params.resaleRoyaltyPercentage;
  token.Transferrable = event.params.transferrable;
  token.save();
}

export function handleSocialTokenUnlisted(
  event: SocialTokenUnlistedEvent
): void {
  let token = SocialTokenHolding.load(
    event.params.id.toString() + "-" + event.params.owner.toString()
  );
  if (token != null) {
    token.AmountAvailbleforSale = token.AmountAvailbleforSale.minus(
      event.params.amount
    );
    token.AmountListedByHolder = token.AmountListedByHolder.minus(
      event.params.amount
    );
    token.save();
  }
}
