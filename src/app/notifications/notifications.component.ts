import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from '../components/base/base.service';
import { ErrorService } from '../components/errorHandler/error.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  pendingComplaintList = [];
  showLoader: boolean = false;
  constructor(private toastr: ToastrService, private base: BaseService, private errorService: ErrorService) { }
  user = JSON.parse(window.localStorage.getItem("currentUser"));
  logged = this.user.usertype;
  userName = this.user.username
  // showNotification(from, align){

  //     const color = Math.floor((Math.random() * 5) + 1);

  //     switch(color){
  //       case 1:
  //       this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
  //          timeOut: 8000,
  //          closeButton: true,
  //          enableHtml: true,
  //          toastClass: "alert alert-info alert-with-icon",
  //          positionClass: 'toast-' + from + '-' +  align
  //        });
  //       break;
  //       case 2:
  //       this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
  //          timeOut: 8000,
  //          closeButton: true,
  //          enableHtml: true,
  //          toastClass: "alert alert-success alert-with-icon",
  //          positionClass: 'toast-' + from + '-' +  align
  //        });
  //       break;
  //       case 3:
  //       this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
  //          timeOut: 8000,
  //          closeButton: true,
  //          enableHtml: true,
  //          toastClass: "alert alert-warning alert-with-icon",
  //          positionClass: 'toast-' + from + '-' +  align
  //        });
  //       break;
  //       case 4:
  //       this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
  //          timeOut: 8000,
  //          enableHtml: true,
  //          closeButton: true,
  //          toastClass: "alert alert-danger alert-with-icon",
  //          positionClass: 'toast-' + from + '-' +  align
  //        });
  //        break;
  //        case 5:
  //        this.toastr.show('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
  //           timeOut: 8000,
  //           closeButton: true,
  //           enableHtml: true,
  //           toastClass: "alert alert-primary alert-with-icon",
  //           positionClass: 'toast-' + from + '-' +  align
  //         });
  //       break;
  //       default:
  //       break;
  //     }
  // }
  showNotification(from, align, color, msg) {
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
  markInProgress(complaintId: any) {
    debugger;
    this.base.acceptComplaint(complaintId).subscribe(resp => {
      console.log("response is ", resp);
      if (resp.responsecode == 0) {
        this.showNotification("top", "right", 2, resp.statusmsg);
        this.showList();
      } else if (resp.responsecode == 1) {
        this.showNotification("top", "right", 1, resp.statusmsg);
      } else {
        this.showNotification("top", "right", 1, resp.statusmsg);
      }
    }, (error) => {
      let err = this.errorService.handleHtrpErrors(error);
      this.showNotification("top", "right", 1, err);
    })
  }
  markResolved(complaintId: any) {
    this.base.resolvedComplaint(complaintId).subscribe(resp => {
      console.log("response is ", resp);
      if (resp.responsecode == 0) {
        this.showNotification("top", "right", 2, resp.statusmsg);
        this.showList();
      } else if (resp.responsecode == 1) {
        this.showNotification("top", "right", 1, resp.statusmsg);
      } else {
        this.showNotification("top", "right", 1, resp.statusmsg);
      }
    }, (error) => {
      let err = this.errorService.handleHtrpErrors(error);
      this.showNotification("top", "right", 1, err);
    })
  }

  showList() {
    this.showLoader = true;
    this.base.getPendingComplaint(this.user.id, this.user.usertype).subscribe(resp => {
      console.log("response is ", resp);
      if (resp.responsecode == 0) {
        this.showLoader = false;
        this.pendingComplaintList = resp.data

      } else if (resp.responsecode == 1) {

        this.showNotification("top", "right", 1, resp.statusmsg);
      } else {
        this.showNotification("top", "right", 1, resp.statusmsg);
      }
    }, (error) => {
      let err = this.errorService.handleHtrpErrors(error);
      this.showNotification("top", "right", 1, err);
    })
  }
  ngOnInit() {
    this.showLoader = true;
    this.base.getPendingComplaint(this.user.id, this.user.usertype).subscribe(resp => {
      console.log("response is ", resp);
      if (resp.responsecode == 0) {
        this.showLoader = false;
        this.showNotification("top", "right", 2, resp.statusmsg);
        this.pendingComplaintList = resp.data
        console.log("pending is", this.pendingComplaintList);

      } else if (resp.responsecode == 1) {
        this.showLoader = false;

        this.showNotification("top", "right", 1, resp.statusmsg);
      } else {
        this.showLoader = false;
        this.showNotification("top", "right", 1, resp.statusmsg);
      }
    }, (error) => {
      let err = this.errorService.handleHtrpErrors(error);
      this.showNotification("top", "right", 1, err);
    })
  }
}
