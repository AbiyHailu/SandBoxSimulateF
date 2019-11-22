import { Injectable } from "@angular/core";
import { Pesticide } from "../model/pesticide";

@Injectable()
export class PesticideService {
  constructor() {
    this.pesticide = [
      {
        Id: 1,
        PesticideName: "Pesticide1",
        ProtectionStrength: 1.1,
        EnvtImpact: 2.3,
        Purpose: ["Pest 1", "Pest 2"]
      },
      {
        Id: 2,
        PesticideName: "Pesticide2",
        ProtectionStrength: 1.1,
        EnvtImpact: 2.3,
        Purpose: ["Pest 2", "Pest 3"]
      },
      {
        Id: 3,
        PesticideName: "Pesticide3",
        ProtectionStrength: 1.1,
        EnvtImpact: 2.3,
        Purpose: ["Pest 2", "Pest 4"]
      },
      {
        Id: 4,
        PesticideName: "Pesticide4",
        ProtectionStrength: 1.1,
        EnvtImpact: 2.3,
        Purpose: ["Pest 3", "Pest 4"]
      },
      {
        Id: 5,
        PesticideName: "Pesticide5",
        ProtectionStrength: 1.1,
        EnvtImpact: 2.3,
        Purpose: ["Pest 1", "Pest 4"]
      },
      {
        Id: 6,
        PesticideName: "Pesticide6",
        ProtectionStrength: 1.1,
        EnvtImpact: 2.3,
        Purpose: ["Pest 2", "Pest 4", "Pest 1"]
      }
    ];
  }
  pesticide: Pesticide[];
  getPesticides() {
    return this.pesticide;
  }
}
