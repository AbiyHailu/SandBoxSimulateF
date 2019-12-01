import { Injectable } from "@angular/core";

@Injectable()
export class CommonFnService {
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getImpactOnPest(pestId: number, popln: number, resourceId: number) {
    if (pestId === 1) {
      if (resourceId === 1) {
        return popln - popln * 0.2;
      } else if (resourceId === 2) {
        return popln - popln * 0.1;
      } else if (resourceId === 3) {
        return popln - popln * 0;
      } else if (resourceId === 4) {
        return popln - popln * 0.3;
      } else if (resourceId === 5) {
        return popln - popln * 0;
      } else if (resourceId === 6) {
        return popln - popln * 0.2;
      }
    } else if (pestId === 2) {
      if (resourceId === 1) {
        return popln - popln * 0.1;
      } else if (resourceId === 2) {
        return popln - popln * 0;
      } else if (resourceId === 3) {
        return popln - popln * 0;
      } else if (resourceId === 4) {
        return popln - popln * 0.3;
      } else if (resourceId === 5) {
        return popln - popln * 0.2;
      } else if (resourceId === 6) {
        return popln - popln * 0.1;
      }
    } else if (pestId === 1) {
      if (resourceId === 1) {
        return popln - popln * 0;
      } else if (resourceId === 2) {
        return popln - popln * 0.2;
      } else if (resourceId === 3) {
        return popln - popln * 0.3;
      } else if (resourceId === 4) {
        return popln - popln * 0;
      } else if (resourceId === 5) {
        return popln - popln * 0;
      } else if (resourceId === 6) {
        return popln - popln * 0;
      }
    } else if (pestId === 4) {
      if (resourceId === 1) {
        return popln - popln * 0.1;
      } else if (resourceId === 2) {
        return popln - popln * 0.4;
      } else if (resourceId === 3) {
        return popln - popln * 0;
      } else if (resourceId === 4) {
        return popln - popln * 0.5;
      } else if (resourceId === 5) {
        return popln - popln * 0.2;
      } else if (resourceId === 6) {
        return popln - popln * 0;
      }
    }
  }

  getImpactOnBudget(resourceId: number, amount: number) {
    if (resourceId === 1) {
      return 5 * amount;
    } else if (resourceId === 2) {
      return 8 * amount;
    } else if (resourceId === 3) {
      return 15 * amount;
    } else if (resourceId === 4) {
      return 24 * amount;
    } else if (resourceId === 5) {
      return 30 * amount;
    } else if (resourceId === 6) {
      return 35 * amount;
    }
  }
  getImpactOEnvt(resourceId: number, EnvtExp: number) {
    if (resourceId === 1) {
      return 0.9 * EnvtExp;
    } else if (resourceId === 2) {
      return 0.8 * EnvtExp;
    } else if (resourceId === 3) {
      return 1 * EnvtExp;
    } else if (resourceId === 4) {
      return 0.86 * EnvtExp;
    } else if (resourceId === 5) {
      return 1.12 * EnvtExp;
    } else if (resourceId === 6) {
      return 0.97 * EnvtExp;
    }
  }
  getImpactOnQuality(resourceId: number, QualityExp: number) {
    if (resourceId === 1) {
      return 0.92 * QualityExp;
    } else if (resourceId === 2) {
      return 0.82 * QualityExp;
    } else if (resourceId === 3) {
      return 0.9 * QualityExp;
    } else if (resourceId === 4) {
      return 0.96 * QualityExp;
    } else if (resourceId === 5) {
      return 1.1 * QualityExp;
    } else if (resourceId === 6) {
      return 0* QualityExp;
    }
  }
}
