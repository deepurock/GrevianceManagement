import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";

import { AppComponent } from "./app.component";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { RegistrationPageModule } from "./components/userComponent/registration-page/registration-page.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ComponentsModule,
    RouterModule,
    RegistrationPageModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
  ],
  declarations: [AppComponent, AdminLayoutComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
