import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { SharedDataService } from "../services/sharedData.service";
import { takeUntil } from "rxjs/operators";
import { PestService } from "../services/pest.service";
import { Pest } from "../model/pest";
import { CommonFnService } from "../services/commonFn.service";
import { ResourceService } from "../services/resource.service";

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
  resources: Resource[];
  
  constructor(
    private pestService: PestService,
    private resourceService:ResourceService,
    private sharedDataService: SharedDataService,
    private commonFnService: CommonFnService,
  
  ) {
    this.pests = this.pestService.getPests();
    this.resources = this.resourceService.getResources()
    console.log(this.resources)
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

  interval;
  startTimer() {
    this.interval = setInterval(() => {
      if (this.plantAge > 0) {
        this.plantAge--;
      } else {
        clearInterval(this.interval);
        // this.plantAge = 60;
      }
      this.computePestCurrentPopuln();
    }, 10000);
  }

  pauseTimer(){
    clearInterval(this.interval);
  }


  pestPopln = [];
  initalizPests() {
    this.pestPopln.push(
      {
        PestId: this.pests[0].Id,
        Pest: this.pests[0].PestName,
        initPolpn: this.commonFnService.getRandomInt(1),
        currentPopln: 0
      },
      {
        PestId: this.pests[1].Id,
        Pest: this.pests[1].PestName,
        initPolpn: this.commonFnService.getRandomInt(1),
        currentPopln: 0
      },
      {
        PestId: this.pests[2].Id,
        Pest: this.pests[2].PestName,
        initPolpn: this.commonFnService.getRandomInt(1),
        currentPopln: 0
      },
      {
        PestId: this.pests[3].Id,
        Pest: this.pests[3].PestName,
        initPolpn: this.commonFnService.getRandomInt(1),
        currentPopln: 0
      }
    );
    // console.log(this.pestPopln);
  }

  computePestCurrentPopuln() {
    this.pestPopln.forEach((element, key) => {
      if (element.currentPopln === 0) {
        element.currentPopln =
          Math.round(
            element.initPolpn * this.pests[key].ReproductionRate * 100
          ) / 10;
      } else {
        element.currentPopln =
          Math.round(
            element.currentPopln * this.pests[key].ReproductionRate * 100
          ) / 100;
      }
    });
  }
 resourceId
  TakeMeasure() {
    this.closeNav()
    //resoure id create a select esource methode, open stor from side show stock and purpose
    //select resource + enter amount
    //for now test resource
 if( this.resourceId){
 this.pestPopln.forEach((element,key) => {
      element.currentPopln = this.commonFnService.getImpactOnPest(
        element.PestId,
        element.currentPopln,
        this.resourceId
      );
      if(this.pestPopln.length-1===key){
         this.resourceId =null
      }
    });
 }else{
    alert('Select a resource befor taking measuure.');
 }
   

    console.log(this.pestPopln);
    console.log(this.pests);
  }
  openNav() {
    document.getElementById("sidenav").style.width = "20%";
    //document.getElementById("main").style.width = "80%";
   // document.getElementById("main").style.marginLeft = "20%";
  }

  closeNav() {
    document.getElementById("sidenav").style.width = "0";
    // document.getElementById("main").style.width = "100%";
    //document.getElementById("main").style.marginLeft = "0%";
  }
onItemChange(value){
this.resourceId =value
}
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
