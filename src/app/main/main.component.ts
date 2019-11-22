import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { SharedDataService } from "../services/sharedData.service";
import { takeUntil } from "rxjs/operators";
import { PestService } from "../services/pest.service";
import { Pest } from "../model/pest";
import { CommonFnService } from "../services/commonFn.service";

@Component({
  selector: "main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnDestroy {
  unsubscribe: Subject<void> = new Subject();
  simulationItems: any;
  plantAge;
  pests: Pest[];
  constructor(
    private pestService: PestService,
    private sharedDataService: SharedDataService,
    private commonFnService: CommonFnService
  ) {
    this.pests = this.pestService.getPests();

    this.sharedDataService._currentSimulationItem
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        this.simulationItems = res;
        this.plantAge = this.simulationItems.filter(e => e.Age)[0].Age;
        this.initalizPests();
        this.startTimer();
      });
  }

  ngOnInit() {}

  timeLeft: number = 60;
  interval;
  startTimer() {
    this.interval = setInterval(() => {
      if (this.plantAge > 0) {
        this.plantAge--;
      } else {
        this.plantAge = 60;
      }
      console.log(this.plantAge);
      this.computePestCurrentPopuln();
    }, 2000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  pestPopln = [];
  initalizPests() {
    this.pestPopln.push(
      {
        Pest: this.pests[0].PestName,
        initPolpn: this.commonFnService.getRandomInt(10),
        currentPopln: 0
      },
      {
        Pest: this.pests[1].PestName,
        initPolpn: this.commonFnService.getRandomInt(10),
        currentPopln: 0
      },
      {
        Pest: this.pests[2].PestName,
        initPolpn: this.commonFnService.getRandomInt(10),
        currentPopln: 0
      },
      {
        Pest: this.pests[3].PestName,
        initPolpn: this.commonFnService.getRandomInt(10),
        currentPopln: 0
      }
    );
    console.log(this.pestPopln);
  }

  computePestCurrentPopuln() {
    this.pestPopln.forEach((element, key) => {
      if (element.currentPopln === 0) {
        element.currentPopln =
          element.initPolpn * this.pests[key].ReproductionRate;
      } else {
        element.currentPopln =
          element.currentPopln * this.pests[key].ReproductionRate;
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
