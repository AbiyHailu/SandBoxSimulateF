import { Component } from "@angular/core";
import { PlantService } from "../services/plant.service";
import { Plant } from "../model/plant";
import { GameItem } from "../model/gameItem";
import { ResourceService } from "../services/resource.service";
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
    private resourceService: ResourceService,
    private marketService: MarketService,
    private sharedDataService: SharedDataService
  ) {
    this.selectPlant = true;
    this.selectMarket = false;
    this.simulationItem = [];
    this.simulationReady = true;
  }

  registerOrLogin: boolean;
  selectPlant: boolean;
  selectMarket: boolean;

  beginArray = [
    "registerOrLogin",
    "selectPlant",
    "selectMarket",
    "beginSimulation"
  ];

  plants: Plant[];
  resources: Resource[];
  markets: Market[];
  simulationItem: GameItem[];
  simulationReady: boolean;
  ngOnInit() {
    this.plants = this.plantService.getPlants();
    this.resources = this.resourceService.getResources();
    this.markets = this.marketService.getMarkets();
  }

  addGameItem(val) {
    if ("PlantName" in val) {
      if (this.simulationItem.length > 0) {
        let ind = this.simulationItem.find(e => e["PlantName"]);
        if (ind) {
          let i = this.simulationItem.findIndex(e => e["PlantName"]);
          this.simulationItem.splice(i, 1);
          this.simulationItem.push(val);
        } else {
          this.simulationItem.push(val);
        }
      } else {
        this.simulationItem.push(val);
      }
    }

    if ("MarketName" in val) {
      if (this.simulationItem.length > 0) {
        let ind = this.simulationItem.find(e => e["MarketName"]);
        if (ind) {
          let i = this.simulationItem.findIndex(e => e["MarketName"]);
          this.simulationItem.splice(i, 1);
          this.simulationItem.push(val);
        } else {
          this.simulationItem.push(val);
        }
      } else {
        this.simulationItem.push(val);
      }
    }

    if (this.simulationItem.length === 2) {
      this.simulationReady = false;
    } else {
      this.simulationReady = true;
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
    this.sharedDataService.changeBeginStatus(false);
    this.sharedDataService.changeMainStatus(true);
    this.sharedDataService.changeSimulationItemStatus(this.simulationItem);
  }
}
