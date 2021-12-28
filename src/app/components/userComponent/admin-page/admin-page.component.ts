import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BaseService } from "../../base/base.service";

@Component({
  selector: "app-admin-page",
  templateUrl: "./admin-page.component.html",
  styleUrls: ["./admin-page.component.css"],
})
export class AdminPageComponent implements OnInit {
  adminForm: FormGroup;
  constructor(public formbuilder: FormBuilder, public base: BaseService) {}

  initializeForm() {
    this.adminForm = this.formbuilder.group({
      email: new FormControl(""),
      password: new FormControl(""),
    });
  }
  ngOnInit(): void {
    this.initializeForm();
  }
  calling(adminForm) {
    this.base.dummyGetReq().subscribe((resp) => {
      console.log("respinse is", resp);
    });
    console.log("i click", adminForm.value);
  }
}
