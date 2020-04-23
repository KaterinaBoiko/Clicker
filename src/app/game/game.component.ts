import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { MatDialog } from "@angular/material/dialog";
import { ScoreDialogComponent } from "../score-dialog/score-dialog.component";
import { ChangeTimerDialogComponent } from "../change-timer-dialog/change-timer-dialog.component";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  timer: number;
  userName: string;
  buttonText: string;
  clickCounter: number = 0;

  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.timer = this.dataService.getTimer();
    this.userName = this.dataService.getUserName();
    this.buttonText = "start";
  }

  playClicker() {
    if (this.buttonText == "start") {
      this.buttonText = "click";
      this.startTimer();
    }
    this.clickCounter++;
  }

  startTimer() {
    const gameTimer = setInterval(() => {
      this.timer -= 1;
      if (this.timer <= 0) {
        clearInterval(gameTimer);
        let score = this.dataService.getScore();
        score.push({
          name: this.userName,
          count: this.clickCounter,
          timer: this.dataService.getTimer(),
          date: new Date(),
        });
        this.dataService.setScore(score);
        this.buttonText = "start";
      }
    }, 1000);
  }

  playAgain() {
    this.clickCounter = 0;
    this.timer = this.dataService.getTimer();
  }

  openDialogScore(): void {
    this.dialog.open(ScoreDialogComponent, {
      width: "550px",
    });
  }

  openDialogChangeTimer(): void {
    let dialogRef;
    if (this.buttonText == "start") {
      dialogRef = this.dialog.open(ChangeTimerDialogComponent, {
        width: "450px",
      });

      dialogRef.afterClosed().subscribe((newTimer: number) => {
        if (newTimer) {
          this.timer = newTimer;
          this.dataService.setTimer(this.timer);
        }
        this.playAgain();
      });
    }
  }
}
