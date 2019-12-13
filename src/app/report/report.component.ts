import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { SharedDataService } from "../services/sharedData.service";
import { CommonFnService } from "../services/commonFn.service";
import { Report } from "../model/report";
import { ReportService } from "../services/report.service";

@Component({
  selector: "report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"]
})
export class ReportComponent implements OnDestroy {
  unsubscribe: Subject<void> = new Subject();
  reports: Report[];

  constructor(
    private sharedDataService: SharedDataService,
    private commonFnService: CommonFnService,
    private reportnService: ReportService
  ) {}
  getReports() {
    this.reports = this.reportnService.getReports();
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
