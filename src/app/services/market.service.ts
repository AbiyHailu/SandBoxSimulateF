import { Injectable } from "@angular/core";
import { Market } from "../model/market";

@Injectable()
export class MarketService {
  constructor() {
    this.market = [
      { Id: 1, MarketName: "Market1" },
      { Id: 2, MarketName: "Market2" },
      { Id: 3, MarketName: "Market3" },
      { Id: 4, MarketName: "Market4" },
      { Id: 5, MarketName: "Market5" }
    ];
  }
  market: Market[];
  getMarkets() {
    return this.market;
  }
}
