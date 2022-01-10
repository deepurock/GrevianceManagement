import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from '../components/base/base.service';
import { ErrorService } from '../components/errorHandler/error.service';

declare const google: any;

interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable?: boolean;
}
@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    inProgressComplaintList = [];
    showLoader: boolean = false;
    constructor(private toastr: ToastrService, private base: BaseService,private errorService: ErrorService) { }
    user = JSON.parse(window.localStorage.getItem("currentUser"));
    logged = this.user.usertype;
    userName = this.user.username

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
        this.showLoader = true;
        this.base.getInprogressComplaint(this.user.id,this.user.usertype).subscribe(resp => {
            console.log("response is ", resp);
            if (resp.responsecode == 0) {
                this.showLoader = false;
                this.showNotification("top", "right", 2, resp.statusmsg);
                this.inProgressComplaintList = resp.data
            } else if (resp.responsecode == 1) {
                this.showLoader = false;

                this.showNotification("top", "right", 1, resp.statusmsg);
            } else {
                this.showLoader = false;
                this.showNotification("top", "right", 1, resp.statusmsg);
            }
        }, (error) => {
            this.showNotification("top", "right", 1, error);

        })
    }
    showList(){
        this.showLoader = true;
        this.base.getInprogressComplaint(this.user.id,this.user.usertype).subscribe(resp => {
            console.log("response is ", resp);
            if (resp.responsecode == 0) {
                this.showLoader = false;
                this.inProgressComplaintList = resp.data
            } else if (resp.responsecode == 1) {
                this.showLoader = false;
                this.showNotification("top", "right", 1, resp.statusmsg);
            } else {
                this.showLoader = false;
                this.showNotification("top", "right", 1, resp.statusmsg);
            }
        }, (error) => {
            this.showNotification("top", "right", 1, error);

        })
    }
    markResolved(complaintId:any){
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
}
