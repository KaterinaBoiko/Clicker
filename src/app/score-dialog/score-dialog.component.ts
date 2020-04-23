import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-score-dialog",
  templateUrl: "./score-dialog.component.html",
  styleUrls: ["./score-dialog.component.css"],
})
export class ScoreDialogComponent implements OnInit {
  score: ScoreRecord[];
  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<ScoreDialogComponent>
  ) {}

  ngOnInit(): void {
    this.score = this.dataService
      .getScore()
      .sort((a, b) => (a.count < b.count ? 1 : -1));

    if (this.score.length == 0) this.score = null;
  }

  clearScore() {
    this.dataService.removeScore();
    this.score = null;
  }
}

export class ScoreRecord {
  name: string;
  count: number;
  timer: number;
  date: Date;
}
