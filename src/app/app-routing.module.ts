import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { GameComponent } from "./game/game.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "game", component: GameComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
