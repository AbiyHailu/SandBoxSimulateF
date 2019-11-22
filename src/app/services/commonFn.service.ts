import { Injectable } from "@angular/core";

@Injectable()
export class CommonFnService {
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
