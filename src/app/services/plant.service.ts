import { Injectable } from "@angular/core";
import { Plant } from "../model/plant";

@Injectable()
export class PlantService {
  constructor() {
    this.plants = [
      { Id: 1, PlantName: "test1", Age: 90 },
      { Id: 2, PlantName: "test2", Age: 80 },
      { Id: 3, PlantName: "test3", Age: 87 },
      { Id: 4, PlantName: "test4", Age: 70 },
      { Id: 5, PlantName: "test5", Age: 79 },
      { Id: 6, PlantName: "test6", Age: 80 }
    ];
  }
  plants: Plant[];
  getPlants() {
    return this.plants;
  }
}
