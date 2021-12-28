import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BaseService } from "../../base/base.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public formbuilder: FormBuilder, public base: BaseService) {}
  initializeForm() {
    this.loginForm = this.formbuilder.group({
      email: new FormControl(""),
      passowrd: new FormControl(""),
    });
  }
  ngOnInit(): void {
    this.initializeForm();
  }
  calling(loginForm) {
    console.log("i click", loginForm.value);
    var testObject = [{ one: 1, two: 2, three: 3 }];

    // Put the object into storage
    localStorage.setItem("testObject", JSON.stringify(testObject));
  }
}
