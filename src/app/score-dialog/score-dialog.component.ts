import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-score-dialog",
  templateUrl: "./score-dialog.component.html",
  styleUrls: ["./score-dialog.component.css"],
})
export class ScoreDialogComponent implements OnInit {
  score: ScoreRecord[];
  constructor(public dialogRef: MatDialogRef<ScoreDialogComponent>) {}

  ngOnInit(): void {
    this.score = JSON.parse(localStorage.getItem("score"));
  }

  clearScore() {
    localStorage.removeItem("score");
    this.score = null;
  }
}

export class ScoreRecord {
  name: string;
  count: number;
  timer: number;
  date: Date;
}
