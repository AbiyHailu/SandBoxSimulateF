import { Injectable } from "@angular/core";
import { Plant } from "../model/plant";

@Injectable()
export class PlantService {
  constructor() {
    this.plants = [
      { Id: 1, Name: "test1" },
      { Id: 2, Name: "test2" },
      { Id: 3, Name: "test3" },
      { Id: 4, Name: "test4" },
      { Id: 5, Name: "test5" },
      { Id: 6, Name: "test6" }
    ];
  }
  plants: Plant[];
  getPlants() {
    return this.plants;
  }
}
