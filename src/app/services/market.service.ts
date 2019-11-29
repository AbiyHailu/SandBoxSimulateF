import { Injectable } from "@angular/core";
import { Market } from "../model/market";

@Injectable()
export class MarketService {
  constructor() {
    this.market = [
      {
        Id: 1,
        MarketName: "Market1",
        QualityExp: 100,
        EnvtExp: 80,
        ProdExp: 100
      },
      {
        Id: 2,
        MarketName: "Market2",
        QualityExp: 100,
        EnvtExp: 80,
        ProdExp: 100
      },
      {
        Id: 3,
        MarketName: "Market3",
        QualityExp: 100,
        EnvtExp: 80,
        ProdExp: 100
      },
      {
        Id: 4,
        MarketName: "Market4",
        QualityExp: 100,
        EnvtExp: 80,
        ProdExp: 100
      },
      {
        Id: 5,
        MarketName: "Market5",
        QualityExp: 100,
        EnvtExp: 80,
        ProdExp: 100
      }
    ];
  }
  market: Market[];
  getMarkets() {
    return this.market;
  }
}
