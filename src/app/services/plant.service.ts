import { Injectable } from "@angular/core";
import { Plant } from "../model/plant";

@Injectable()
export class PlantService {
  constructor() {
    this.plants = [
      { Id: 1, PlantName: "test1" },
      { Id: 2, PlantName: "test2" },
      { Id: 3, PlantName: "test3" },
      { Id: 4, PlantName: "test4" },
      { Id: 5, PlantName: "test5" },
      { Id: 6, PlantName: "test6" }
    ];
  }
  plants: Plant[];
  getPlants() {
    return this.plants;
  }
}
