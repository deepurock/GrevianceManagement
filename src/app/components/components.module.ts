import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RegistrationPageComponent } from "./userComponent/registration-page/registration-page.component";
import { LoginPageComponent } from "./userComponent/login-page/login-page.component";
import { AdminPageComponent } from "./userComponent/admin-page/admin-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    AdminPageComponent,
  ],
  exports: [FooterComponent, NavbarComponent, SidebarComponent],
})
export class ComponentsModule {}
