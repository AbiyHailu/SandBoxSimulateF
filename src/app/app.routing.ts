import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
  {
    path: "manage",
    //canActivate: [AuthGuard],
    loadChildren: "./main/main.module#MainModule"
  },

  {
    path: "main",
    component: MainComponent
  }
];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  onSameUrlNavigation: "reload"
});
