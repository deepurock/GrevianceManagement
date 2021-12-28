import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { BaseService } from "../../base/base.service";
import { ValidationRequiredMessage } from "../validationsAndMessages/validationMessages";
import {
  MaxLength,
  MinLength,
  Patterns,
} from "../validationsAndMessages/validators";

@Component({
  selector: "app-registration-page",
  templateUrl: "./registration-page.component.html",
  styleUrls: ["./registration-page.component.css"],
})
export class RegistrationPageComponent implements OnInit {
  isSubmitted = false;
  pageTitle = "User Registration";
  pattern: Patterns = new Patterns();
  maxLength: MaxLength = new MaxLength();
  minLength: MaxLength = new MinLength();
  errorMsgs: ValidationRequiredMessage = new ValidationRequiredMessage();

  registrationForm: FormGroup;
  constructor(
    private router: Router,
    public formbuilder: FormBuilder,
    public base: BaseService
  ) {}

  initializeForm() {
    this.registrationForm = this.formbuilder.group({
      firstName: new FormControl("", [
        Validators.required,
        Validators.pattern(this.pattern.firstname),
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.pattern(this.pattern.lastname),
      ]),
      programme: new FormControl("", [Validators.required]),
      phoneNo: new FormControl("", [
        Validators.required,
        Validators.pattern(this.pattern.phoneNo),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(this.pattern.emailId),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(this.pattern.password),
      ]),
      confirmPassword: new FormControl("", [
        Validators.required,
        Validators.pattern(this.pattern.password),
      ]),
    });
  }
  ngOnInit(): void {
    this.initializeForm();
  }
  // calling() {
  //   this.router.navigate(["./dashboard"]);
  //   console.log("i click");
  // }
  calling(registrationForm) {
    // this.router.navigate(["./login"]);
    console.log("i click", registrationForm.value);
    if (!registrationForm.valid) {
      this.isSubmitted = true;
      return false;
    }
    this.base.douserRegistration(registrationForm.value).subscribe((resp) => {
      console.log("response is ", resp);
    });
  }
}
