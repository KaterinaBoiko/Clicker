import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-get-name-dialog",
  templateUrl: "./get-name-dialog.component.html",
  styleUrls: ["./get-name-dialog.component.css"],
})
export class GetNameDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<GetNameDialogComponent>) {}

  ngOnInit(): void {}
}
