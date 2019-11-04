import { Component } from "@angular/core";
import { PlantService } from "../services/plant.service";
import { Plant } from "../model/plant";
import { GameItem } from "../model/gameItem";

@Component({
  selector: "begin",
  templateUrl: "./begin.component.html",
  styleUrls: ["./begin.component.css"]
})
export class BeginComponent {
  constructor(private plantService: PlantService) {
    this.selectPlant = true;
    this.selectPesticide = false;
    this.selectMarket = false;
    this.gameItem = [];
  }

  registerOrLogin: boolean;
  selectPlant: boolean;
  selectPesticide: boolean;
  selectMarket: boolean;

  beginArray = [
    "registerOrLogin",
    "selectPlant",
    "selectPesticide",
    "selectMarket"
  ];
  plants: Plant[];
  gameItem: GameItem[];

  ngOnInit() {
    this.plants = this.plantService.getPlants();
  }

  addGameItem(val) {
    console.log("this.gameItem", this.gameItem);
    if ("PlantName" in val) {
      console.log("val", val);
      if (this.gameItem.length > 0) {
        let ind = this.gameItem.findIndex(e => e.Plant);
        this.gameItem.splice(ind, 1);
        this.gameItem.push(val);
      } else {
        this.gameItem.push(val);
      }
    }
  }
  index = 0;
  navigatToNext(val) {
    console.log(this.beginArray.length);
    console.log(this.index);
    if (this.beginArray.length - 1 > this.index) {
      this.index = this.index + 1;
    }
  }

  navigatToPrevious() {
    console.log(this.beginArray.length);
    console.log(this.index);
    if (this.index > 0) {
      this.index = this.index - 1;
    }
  }
}
