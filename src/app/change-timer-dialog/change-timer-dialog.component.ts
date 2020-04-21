import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-change-timer-dialog",
  templateUrl: "./change-timer-dialog.component.html",
  styleUrls: ["./change-timer-dialog.component.css"],
})
export class ChangeTimerDialogComponent implements OnInit {
  timer: number;
  constructor(public dialogRef: MatDialogRef<ChangeTimerDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    const newTimer = Number(this.timer);
    if (newTimer != NaN && newTimer < 31 && newTimer > 4)
      this.dialogRef.close(newTimer);
    else this.dialogRef.close();
  }
}
