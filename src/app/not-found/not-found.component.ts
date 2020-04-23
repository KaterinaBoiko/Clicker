import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-not-found",
  template: `<p>Oops, this page wasn't found.</p>`,
  styleUrls: ["./not-found.component.css"],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
