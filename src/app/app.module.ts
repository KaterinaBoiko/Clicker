import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from "./app.component";
import { GetNameDialogComponent } from "./get-name-dialog/get-name-dialog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ScoreDialogComponent } from "./score-dialog/score-dialog.component";
import { ChangeTimerDialogComponent } from "./change-timer-dialog/change-timer-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    GetNameDialogComponent,
    ScoreDialogComponent,
    ChangeTimerDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
