import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from '../components/base/base.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
pendingComplaintList = [];
  constructor(private toastr: ToastrService,private base:BaseService) {}
   user = JSON.parse(localStorage.getItem("testObject"));
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
    this.base.getPendingComplaint().subscribe(resp=>{
      console.log("response is ", resp);
      if (resp.responsecode == 0) {
        this.showNotification("top", "right", 2, resp.statusmsg);
        this.pendingComplaintList = resp.data
      } else if (resp.responsecode == 1) {
        this.showNotification("top", "right", 1, resp.statusmsg);
      } else {
        this.showNotification("top", "right", 1, resp.statusmsg);
      }
    })
  }

}
