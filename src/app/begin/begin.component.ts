import { Component } from "@angular/core";
import { PlantService } from "../services/plant.service";
import { Plant } from "../model/plant";
import { GameItem } from "../model/gameItem";
import { Pesticide } from "../model/pesticide";
import { PesticideService } from "../services/pesticide.service";
import { Market } from "../model/market";
import { MarketService } from "../services/market.service";
import { SharedDataService } from "../services/sharedData.service";

@Component({
  selector: "begin",
  templateUrl: "./begin.component.html",
  styleUrls: ["./begin.component.css"]
})
export class BeginComponent {
  constructor(
    private plantService: PlantService,
    private pesticideService: PesticideService,
    private marketService: MarketService,
    private sharedDataService: SharedDataService
  ) {
    this.selectPlant = true;
    this.selectPesticide = false;
    this.selectMarket = false;
    this.gameItem = [];
    this.simulationReady = true;
  }

  registerOrLogin: boolean;
  selectPlant: boolean;
  selectPesticide: boolean;
  selectMarket: boolean;

  beginArray = [
    "registerOrLogin",
    "selectPlant",
    "selectPesticide",
    "selectMarket",
    "beginSimulation"
  ];

  plants: Plant[];
  pesticides: Pesticide[];
  markets: Market[];
  gameItem: GameItem[];
  simulationReady: boolean;
  ngOnInit() {
    this.plants = this.plantService.getPlants();
    this.pesticides = this.pesticideService.getPesticides();
    this.markets = this.marketService.getMarkets();
  }

  addGameItem(val) {
    console.log("this.gameItem", this.gameItem);
    if ("PlantName" in val) {
      if (this.gameItem.length > 0) {
        let ind = this.gameItem.find(e => e["PlantName"]);
        if (ind) {
          let i = this.gameItem.findIndex(e => e["PlantName"]);
          this.gameItem.splice(i, 1);
          this.gameItem.push(val);
        } else {
          this.gameItem.push(val);
        }
      } else {
        this.gameItem.push(val);
      }
    }

    if ("PesticideName" in val) {
      if (this.gameItem.length > 0) {
        let ind = this.gameItem.find(e => e["PesticideName"]);
        if (ind) {
          let i = this.gameItem.findIndex(e => e["PesticideName"]);
          this.gameItem.splice(i, 1);
          this.gameItem.push(val);
        } else {
          this.gameItem.push(val);
        }
      } else {
        this.gameItem.push(val);
      }
    }

    if ("MarketName" in val) {
      if (this.gameItem.length > 0) {
        let ind = this.gameItem.find(e => e["MarketName"]);
        if (ind) {
          let i = this.gameItem.findIndex(e => e["MarketName"]);
          this.gameItem.splice(i, 1);
          this.gameItem.push(val);
        } else {
          this.gameItem.push(val);
        }
      } else {
        this.gameItem.push(val);
      }
    }
    console.log("this.gameItem", this.gameItem.length);
    if (this.gameItem.length === 3) {
      this.simulationReady = false;
      console.log(this.simulationReady);
    } else {
      this.simulationReady = true;
      console.log(this.simulationReady);
    }
  }

  index = 0;
  navigatToNext(val) {
    if (this.beginArray.length - 1 > this.index) {
      this.index = this.index + 1;
    }
  }

  navigatToPrevious() {
    if (this.index > 0) {
      this.index = this.index - 1;
    }
  }
  begin() {
    console.log("begin", this.simulationReady);
    this.sharedDataService.changeBeginStatus(false);
    this.sharedDataService.changeMainStatus(true);
  }
}
