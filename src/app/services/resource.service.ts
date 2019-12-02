import { Injectable } from "@angular/core";
import { Resource } from "../model/resource";

@Injectable()
export class ResourceService {
  constructor() {
    this.resource = [
      {
        Id: 1,
        ResourceName: "Pesticide1",
        ProtectionStrength: 1.1,
        EnvtImpact: 2.3,
        Purpose: ["Pest 1", "Pest 2"]
      },
      {
        Id: 2,
        ResourceName: "Pesticide2",
        ProtectionStrength: 1.1,
        EnvtImpact: 2.3,
        Purpose: ["Pest 2", "Pest 3"]
      },
      {
        Id: 3,
        ResourceName: "Pesticide3",
        ProtectionStrength: 1.1,
        EnvtImpact: 2.3,
        Purpose: ["Pest 2", "Pest 4"]
      },
      {
        Id: 4,
        ResourceName: "Pesticide4",
        ProtectionStrength: 1.1,
        EnvtImpact: 2.3,
        Purpose: ["Pest 3", "Pest 4"]
      },
      {
        Id: 5,
        ResourceName: "Pesticide5",
        ProtectionStrength: 1.1,
        EnvtImpact: 2.3,
        Purpose: ["Pest 1", "Pest 4"]
      },
      {
        Id: 6,
        ResourceName: "Pesticide6",
        ProtectionStrength: 1.1,
        EnvtImpact: 2.3,
        Purpose: ["Pest 2", "Pest 4", "Pest 1"]
      }
    ];
  }
  resource: Resource[];
  getResource() {
    return this.resource;
  }
}
