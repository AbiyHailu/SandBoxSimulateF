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
    /*   if(val isType){

    } */
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
