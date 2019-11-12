import { Component } from "@angular/core";
import { SharedDataService } from "./services/sharedData.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  subject: Subject<void> = new Subject();

  constructor(private sharedDataService: SharedDataService) {
    sharedDataService._currentBegin
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.beginPage = res;
      });
    sharedDataService._currentMain
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.mainPage = res;
      });
  }
  beginPage: boolean;
  mainPage: boolean;

  ngOnInit() {}
}
