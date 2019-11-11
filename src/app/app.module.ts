import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { BeginComponent } from "./begin/begin.component";
import { PlantService } from "./services/plant.service";
import { PesticideService } from "./services/pesticide.service";
import { MarketService } from "./services/market.service";

@NgModule({
  declarations: [AppComponent, MainComponent, BeginComponent],
  imports: [BrowserModule],
  providers: [PlantService, PesticideService, MarketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
