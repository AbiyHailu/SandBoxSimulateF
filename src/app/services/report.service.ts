import { Injectable } from "@angular/core";
import { Report } from "../model/report";

@Injectable()
export class ReportService {
  constructor() {
    this.reports = [
      { Id: 1, ReportType: "Scout", RportText: "Rport Text 1" },
      { Id: 5, ReportType: "Scout", RportText: "Rport Text 1" },
      { Id: 2, ReportType: "Scout", RportText: "Rport Text 1" },
      { Id: 3, ReportType: "Market", RportText: "Rport Text 1" },
      { Id: 4, ReportType: "Market", RportText: "Rport Text 1" },
      { Id: 5, ReportType: "Community", RportText: "Rport Text 1" },
      { Id: 6, ReportType: "Community", RportText: "Rport Text 1" }
    ];
  }
  reports: Report[];
  getReports() {
    return this.reports;
  }
}
