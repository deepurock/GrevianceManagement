import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
var dashboard: any = [];
export const ROUTES: RouteInfo[] = dashboard;
// var retrievedObject = localStorage.getItem("testObject");

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  myIcon: any = "sport_user-run";
  title: any = "LogOut";
  class: any = "active active-pro";
  constructor() {}

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("testObject"));
    var logged = user[0].one;
    console.log("retrievedObject: ", user[0].two);
    if (logged == 1) {
      dashboard = [
        {
          path: "/dashboard",
          title: "Make Complaint",
          icon: "design_app",
          class: "",
        },
        {
          path: "/icons",
          title: "Completed",
          icon: "education_atom",
          class: "",
        },
        {
          path: "/maps",
          title: "Inprogress",
          icon: "location_map-big",
          class: "",
        },
        {
          path: "/notifications",
          title: "Pending",
          icon: "ui-1_bell-53",
          class: "",
        },

        {
          path: "/user-profile",
          title: "User Profile",
          icon: "users_single-02",
          class: "",
        },
        {
          path: "/table-list",
          title: "Table List",
          icon: "design_bullet-list-67",
          class: "",
        },
      ];
    } else {
      dashboard = [
        {
          path: "/dashboard",
          title: "Make Complaint",
          icon: "design_app",
          class: "",
        },
        {
          path: "/icons",
          title: "Completed",
          icon: "education_atom",
          class: "",
        },
        {
          path: "/maps",
          title: "Inprogress",
          icon: "location_map-big",
          class: "",
        },
        {
          path: "/notifications",
          title: "Pending",
          icon: "ui-1_bell-53",
          class: "",
        },
      ];
    }
    this.menuItems = dashboard.filter((menuItem) => menuItem);
  }
  clickfun() {
    console.log("fun called");
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
