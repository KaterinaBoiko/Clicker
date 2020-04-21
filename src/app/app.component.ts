import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { GetNameDialogComponent } from "./get-name-dialog/get-name-dialog.component";
import { ScoreDialogComponent } from "./score-dialog/score-dialog.component";
import { ChangeTimerDialogComponent } from "./change-timer-dialog/change-timer-dialog.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "clicker";
  name: string;
  buttonText: string = "start";
  timer: number;
  clickCounter: number = 0;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialogGetname();
    this.timer = Number(localStorage.getItem("timer")) || 10;
  }

  openDialogGetname(): void {
    const dialogRef = this.dialog.open(GetNameDialogComponent, {
      width: "450px",
    });

    dialogRef.afterClosed().subscribe((name: string) => {
      this.name = name;
      console.log(this.name);
    });
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
        let score = JSON.parse(localStorage.getItem("score")) || [];
        score.push({
          name: this.name,
          count: this.clickCounter,
          timer: Number(localStorage.getItem("timer")),
          date: new Date(),
        });
        localStorage.setItem("score", JSON.stringify(score));
        this.buttonText = "start";
      }
    }, 1000);
  }

  playAgain() {
    this.clickCounter = 0;
    this.timer = Number(localStorage.getItem("timer")) || 10;
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
          localStorage.setItem("timer", this.timer.toString());
        }
        this.playAgain();
      });
    }
  }
}
