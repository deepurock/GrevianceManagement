import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { BaseService } from "../../base/base.service";
import { ValidationRequiredMessage } from "../validationsAndMessages/validationMessages";
import {
  MaxLength,
  MinLength,
  Patterns,
} from "../validationsAndMessages/validators";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  pageTitle = "User Registration";
  pattern: Patterns = new Patterns();
  maxLength: MaxLength = new MaxLength();
  minLength: MinLength = new MinLength();
  errorMsgs: ValidationRequiredMessage = new ValidationRequiredMessage();
  constructor(public formbuilder: FormBuilder, public base: BaseService) {}
  initializeForm() {
    this.loginForm = this.formbuilder.group({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(this.pattern.emailId),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(this.pattern.password),
      ]),
    });
  }
  ngOnInit(): void {
    this.initializeForm();
  }
  calling(loginForm) {
    if (!loginForm.valid) {
      this.isSubmitted = true;
      return false;
    }
    console.log("i click", loginForm.value);
    var testObject = [{ one: 1, two: 2, three: 3 }];

    // Put the object into storage
    localStorage.setItem("testObject", JSON.stringify(testObject));
  }
}
