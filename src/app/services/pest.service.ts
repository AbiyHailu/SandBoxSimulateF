import { Injectable } from "@angular/core";
import { Pest } from "../model/pest";

@Injectable()
export class PestService {
  constructor() {
    this.pest = [
      {
        Id: 1,
        PestName: "Pest 1",
        DamageToQuality: 2.1,
        ReproductionRate: 1.2
      },
      {
        Id: 2,
        PestName: "Pest 2",
        DamageToQuality: 1.1,
        ReproductionRate: 0.8
      },
      {
        Id: 3,
        PestName: "Pest 3",
        DamageToQuality: 1.6,
        ReproductionRate: 1.3
      },
      {
        Id: 4,
        PestName: "Pest 4",
        DamageToQuality: 2.4,
        ReproductionRate: 1.5
      }
    ];
  }
  pest: Pest[];
  getPests() {
    return this.pest;
  }
}
