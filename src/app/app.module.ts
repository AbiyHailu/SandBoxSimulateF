import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { BeginComponent } from "./begin/begin.component";
import { PlantService } from "./services/plant.service";
import { PesticideService } from "./services/pesticide.service";
import { MarketService } from "./services/market.service";
import { SharedDataService } from "./services/sharedData.service";

@NgModule({
  declarations: [AppComponent, MainComponent, BeginComponent],
  imports: [BrowserModule],
  providers: [SharedDataService, PlantService, PesticideService, MarketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
