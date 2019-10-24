import { Component } from "@angular/core";

@Component({
  selector: "main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent {
  constructor() {
    this.startTimer();
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
}
