import { Injectable } from "@angular/core";
import { Plant } from "../model/plant";

@Injectable({
  providedIn: "root"
})
export class PlantService {
  constructor() {
    this.plants = [
      { Id: 1, Name: "test1" },
      { Id: 2, Name: "test2" },
      { Id: 3, Name: "test3" }
    ];
  }
  plants: Plant[];
  getPlants() {
    return this.plants;
  }
}
