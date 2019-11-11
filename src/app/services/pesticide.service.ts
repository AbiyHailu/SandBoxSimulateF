import { Injectable } from "@angular/core";
import { Pesticide } from "../model/pesticide";

@Injectable()
export class PesticideService {
  constructor() {
    this.pesticide = [
      { Id: 1, PesticideName: "Pesticide1" },
      { Id: 2, PesticideName: "Pesticide2" },
      { Id: 3, PesticideName: "Pesticide3" },
      { Id: 4, PesticideName: "Pesticide4" },
      { Id: 5, PesticideName: "Pesticide5" },
      { Id: 6, PesticideName: "Pesticide6" }
    ];
  }
  pesticide: Pesticide[];
  getPesticides() {
    return this.pesticide;
  }
}
