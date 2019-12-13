import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { BeginComponent } from "./begin/begin.component";
import { PlantService } from "./services/plant.service";
import { ResourceService } from "./services/resource.service";
import { MarketService } from "./services/market.service";
import { PestService } from "./services/pest.service";
import { CommonFnService } from "./services/commonFn.service";
import { SharedDataService } from "./services/sharedData.service";
import { ReportService } from "./services/report.service";

@NgModule({
  declarations: [AppComponent, MainComponent, BeginComponent],
  imports: [BrowserModule],
  providers: [
    SharedDataService,
    PlantService,
    ResourceService,
    MarketService,
    PestService,
    ReportService,
    CommonFnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
