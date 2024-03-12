import { Bid } from "./Bid";

export type Auction = {
  id: string;
  name: string;
  year: number;
  img:string;
  highestBid: number;
  highestBidder: string;
  bids: Bid[];
};
