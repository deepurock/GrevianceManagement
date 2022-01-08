import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { RegistrationPageComponent } from "./components/userComponent/registration-page/registration-page.component";
import { LoginPageComponent } from "./components/userComponent/login-page/login-page.component";
import { AdminPageComponent } from "./components/userComponent/admin-page/admin-page.component";
import { AuthGuard } from "./components/authGuard/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "registration",
    pathMatch: "full",
  },
  { path: "registration", component: RegistrationPageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "admin", component: AdminPageComponent },

  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule",
      },
    ],
  },
  {
    path: "**",
    redirectTo: "dashboard",
  },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
