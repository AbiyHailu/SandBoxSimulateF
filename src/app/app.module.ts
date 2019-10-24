import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { BeginComponent } from "./begin/begin.component";

@NgModule({
  declarations: [AppComponent, MainComponent, BeginComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
