import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import * as Chartist from "chartist";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  makeComplaint: FormGroup;
  constructor(public formBuilder: FormBuilder) {}
  initializeForm() {
    this.makeComplaint = this.formBuilder.group({
      category: new FormControl(""),
      subCategory: new FormControl(""),
      complaintNature: new FormControl(""),
      complaint: new FormControl(""),
    });
  }
  ngOnInit() {}
}
