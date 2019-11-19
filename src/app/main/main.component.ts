import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { SharedDataService } from "../services/sharedData.service";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnDestroy {
  unsubscribe: Subject<void> = new Subject();
  simulationItems: any;
  constructor(private sharedDataService: SharedDataService) {
    this.sharedDataService._currentSimulationItem
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        this.simulationItems = res;
        console.log("this.gameItem", this.simulationItems);
      });

    //  this.startTimer();
  }

  ngOnInit() {}

  timeLeft: number = 60;
  interval;
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
      console.log(this.timeLeft);
    }, 2000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
