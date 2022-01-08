import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import * as Chartist from "chartist";
import { ValidationRequiredMessage } from "../components/userComponent/validationsAndMessages/validationMessages";
import {
  MaxLength,
  MinLength,
  Patterns,
} from "../components/userComponent/validationsAndMessages/validators";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  isSubmitted = false;
  makeComplaint: FormGroup;
  pattern: Patterns = new Patterns();
  maxLength: MaxLength = new MaxLength();
  minLength: MinLength = new MinLength();
  errorMsgs: ValidationRequiredMessage = new ValidationRequiredMessage();
  constructor(public formBuilder: FormBuilder) {}
  initializeForm() {
    this.makeComplaint = this.formBuilder.group({
      category: new FormControl("", [Validators.required]),
      subCategory: new FormControl("", [Validators.required]),
      complaintNature: new FormControl("", [Validators.required]),
      complaint: new FormControl("", [Validators.required]),
    });
  }
  ngOnInit() {
    this.initializeForm();
  }
  calling(makeComplaint) {
    console.log("dsfjsfls", makeComplaint);

    if (!makeComplaint.valid) {
      this.isSubmitted = true;
      return false;
    }
  }
}
