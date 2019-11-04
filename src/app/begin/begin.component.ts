import { Component } from "@angular/core";

@Component({
  selector: "begin",
  templateUrl: "./begin.component.html",
  styleUrls: ["./begin.component.css"]
})
export class BeginComponent {
  constructor() {
    this.selectPlant = true;
    this.selectPesticide = false;
    this.selectMarket = false;
  }

  registerOrLogin: boolean;
  selectPlant: boolean;
  selectPesticide: boolean;
  selectMarket: boolean;

  beginArray = [
    "registerOrLogin",
    "selectPlant",
    "selectPesticide",
    "selectMarket"
  ];

  ngOnInit() {}
  index = 0;
  navigatToNext(val) {
    if (this.beginArray.length >= this.index) {
      this.index = 1 + this.index;
    }

    if (val === "selectPlant") {
      this.selectPlant = false;
      this.selectPesticide = true;
      this.selectMarket = false;
    }
    if (val === "selectPesticide") {
      this.selectPlant = false;
      this.selectPesticide = false;
      this.selectMarket = true;
    }
    if (val === "selectMarket") {
      this.selectPlant = false;
      this.selectPesticide = false;
      this.selectMarket = false;
    }
  }

  navigatToPrevious() {
    if (this.beginArray.length >= this.index) {
      this.index = 1 + this.index;
    }
  }
}
