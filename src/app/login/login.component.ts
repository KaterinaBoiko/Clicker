import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  name: string;
  error: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  nameEntered() {
    if (!this.name) {
      this.error = true;
      return;
    }
    this.dataService.setUserName(this.name);
    this.router.navigateByUrl("game");
  }
}
