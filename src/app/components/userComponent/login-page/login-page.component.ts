import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
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
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('changeText') changeText:ElementRef;
  isSubmitted = false;
  pageTitle = "User Registration";
  pattern: Patterns = new Patterns();
  maxLength: MaxLength = new MaxLength();
  minLength: MinLength = new MinLength();
  errorMsgs: ValidationRequiredMessage = new ValidationRequiredMessage();
  constructor(
    public formbuilder: FormBuilder,
    public base: BaseService,
    private router: Router,
    private toastr: ToastrService
  ) {}
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
  ngAfterViewInit() {
    this.changeText.nativeElement.value = 'Whale!';
  }
  calling(loginForm) {
    var testObject = {
      responsecode: "0",
      statusmsg: "Login Successfully...",
      usertype: "MEMBER",
      username: "Deepu",
    };

    // Put the object into storage
    localStorage.setItem("testObject", JSON.stringify(testObject));
    if (!loginForm.valid) {
      this.isSubmitted = true;
      return false;
    }
    this.base.doUserLogin(loginForm.value).subscribe((resp) => {
      console.log("response is ", resp);
      if (resp.responsecode == 0) {
        this.showNotification("top", "right", 2, resp.statusmsg);
        this.router.navigate(["./dashboard"]);
      } else if (resp.responsecode == 1) {
        this.showNotification("top", "right", 1, resp.statusmsg);
      } else {
        this.showNotification("top", "right", 1, resp.statusmsg);
      }
    });
    console.log("i click", loginForm.value);
  }
}
