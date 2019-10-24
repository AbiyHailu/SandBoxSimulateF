import { Component } from "@angular/core";

@Component({
  selector: "begin",
  templateUrl: "./begin.component.html",
  styleUrls: ["./begin.component.css"]
})
export class BeginComponent {
  constructor() {
    //  this.startTimer();
  }

  register: boolean;
  selectPlant: boolean;
  selectPesticide: boolean;
  selectMarket: boolean;
  ngOnInit() {}
}
