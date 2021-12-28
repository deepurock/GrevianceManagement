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
  selector: "app-admin-page",
  templateUrl: "./admin-page.component.html",
  styleUrls: ["./admin-page.component.css"],
})
export class AdminPageComponent implements OnInit {
  adminForm: FormGroup;
  isSubmitted = false;
  pageTitle = "User Registration";
  pattern: Patterns = new Patterns();
  maxLength: MaxLength = new MaxLength();
  minLength: MinLength = new MinLength();
  errorMsgs: ValidationRequiredMessage = new ValidationRequiredMessage();
  constructor(public formbuilder: FormBuilder, public base: BaseService) {}

  initializeForm() {
    this.adminForm = this.formbuilder.group({
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
  calling(adminForm) {
    if (!adminForm.valid) {
      this.isSubmitted = true;
      return false;
    }
    this.base.dummyGetReq().subscribe((resp) => {
      console.log("respinse is", resp);
    });
    console.log("i click", adminForm.value);
  }
}
