import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import * as Chartist from "chartist";
import { ToastrService } from "ngx-toastr";
import { BaseService } from "../components/base/base.service";
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
  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public base: BaseService,
    ) {}
  initializeForm() {
    this.makeComplaint = this.formBuilder.group({
      category: new FormControl("", [Validators.required]),
      subCategory: new FormControl("", [Validators.required]),
      complaintNature: new FormControl("", [Validators.required]),
      complaint: new FormControl("", [Validators.required]),
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
  ngOnInit() {
    this.initializeForm();
    let age = 12;
   let chain = age ?? 32;
   console.log('age is',chain);
  }
  calling(makeComplaint) {
    console.log("dsfjsfls", makeComplaint.value);

    if (!makeComplaint.valid) {
      this.isSubmitted = true;
      return false;
    }
    this.base.makeComplaint(makeComplaint.value).subscribe(resp =>{
      console.log("response is ", resp);
      if (resp.responsecode == 0) {
        this.showNotification("top", "right", 2, resp.statusmsg);
        this.makeComplaint.reset();
      } else if (resp.responsecode == 1) {
        this.showNotification("top", "right", 1, resp.statusmsg);
      } else {
        this.showNotification("top", "right", 1, resp.statusmsg);
      }
    })
  }
}
