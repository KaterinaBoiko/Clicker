import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor() {}

  getUserName(): string {
    return localStorage.getItem("user");
  }

  setUserName(name: string): void {
    localStorage.setItem("user", name);
  }

  getTimer(): number {
    if (!localStorage.getItem("timer")) this.setTimer(10);

    return Number(localStorage.getItem("timer"));
  }

  setTimer(newTimer: number): void {
    localStorage.setItem("timer", newTimer.toString());
  }

  getScore() {
    return JSON.parse(localStorage.getItem("score")) || [];
  }

  setScore(score: any): void {
    localStorage.setItem("score", JSON.stringify(score));
  }

  removeScore(): void {
    localStorage.removeItem("score");
  }
}
