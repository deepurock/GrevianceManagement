import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
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
  minLength: MinLength = new MinLength();
  errorMsgs: ValidationRequiredMessage = new ValidationRequiredMessage();

  registrationForm: FormGroup;
  constructor(
    private router: Router,
    public formbuilder: FormBuilder,
    public base: BaseService,
    private toastr: ToastrService
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
  showNotification(from, align, color, msg) {
    // const color = Math.floor((Math.random() * 5) + 1);
    switch (color) {
      case 2:
        this.toastr.success(msg, "Success", {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: "toast-" + from + "-" + align,
        });
        break;
      case 1:
        this.toastr.error(msg, "Error", {
          timeOut: 4000,
          enableHtml: true,
          closeButton: true,
          toastClass: "alert alert-danger alert-with-icon",
          positionClass: "toast-" + from + "-" + align,
        });
        break;
      default:
        break;
    }
  }
  ngOnInit(): void {
    this.initializeForm();
  }
  // calling() {
  //   this.router.navigate(["./dashboard"]);
  //   console.log("i click");
  // }
  calling(registrationForm) {
    // this.showNotification("top", "right", 2, "user added successfully");
    console.log("i click", registrationForm.value);
    if (!registrationForm.valid) {
      this.isSubmitted = true;
      return false;
    }
    this.base.douserRegistration(registrationForm.value).subscribe((resp) => {
      console.log("response is ", resp);
      if (resp.responsecode == 0) {
        this.showNotification("top", "right", 2, resp.statusmsg);
        this.registrationForm.reset();
        this.router.navigate(["./login"]);
      } else if (resp.responsecode == 1) {
        this.showNotification("top", "right", 1, resp.statusmsg);
      } else {
        this.showNotification("top", "right", 1, resp.statusmsg);
      }
    });
  }
}
