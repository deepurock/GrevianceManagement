import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
var dashboard: any = [];
export const ROUTES: RouteInfo[] = dashboard;
// var retrievedObject = localStorage.getItem("currentUser");

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
  constructor(private router:Router,private toastr: ToastrService) {}
  userName:any = '';
  user:any;
  logged:any;
  ngOnInit() {
     this.user = JSON.parse(window.localStorage.getItem("currentUser"));
     this.logged = this.user.usertype;
    this.userName = this.user.username
    console.log("retrievedObject: ", this.user);
    if (this.logged != "MEMBER") {
      dashboard = [
        // {
        //   path: "/dashboard",
        //   title: "Make Complaint",
        //   icon: "design_app",
        //   class: "",
        // },
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

        // {
        //   path: "/user-profile",
        //   title: "User Profile",
        //   icon: "users_single-02",
        //   class: "",
        // },
        // {
        //   path: "/table-list",
        //   title: "Table List",
        //   icon: "design_bullet-list-67",
        //   class: "",
        // },
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
  clickfun() {
    console.log("fun called");
    window.localStorage.clear();
    this.showNotification("top", "right", 2, 'User logged Out successfully');
    this.router.navigate(['./login']);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
