import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  constructor(private httpClient: HttpClient) {
  }
  //  currentUser = JSON.parse(localStorage.getItem("currentUser"));

  BASE_URL: string = "http://192.168.0.106:8080";
  getCompletedComplaint(studentId: any, userType: any): Observable<any> {
    let URL: any;
    if(userType == "Admin"){
      URL = '/getAll'
    }else{
      URL = `/complaint/${studentId}`;
    }
    return this.httpClient.get(`${this.BASE_URL}${URL}/C`);

  }
  getPendingComplaint(studentId: any,userType:any): Observable<any> {
    let URL: any;
    if(userType == "Admin"){
      URL = '/getAll'
    }else{
      URL = `/complaint/${studentId}`;
    }
    return this.httpClient.get(`${this.BASE_URL}${URL}/P`);

  }
  getInprogressComplaint(studentId: any,userType:any): Observable<any> {
    let URL: any;
    if(userType == "Admin"){
      URL = '/getAll'
    }else{
      URL = `/complaint/${studentId}`;
    }
    return this.httpClient.get(`${this.BASE_URL}${URL}/IP`);
    // return this.httpClient.get(`${this.BASE_URL}/complaint/${studentId}/IP`).pipe(
    //   tap((_) => {
    //     console.log("API successfull");
    //   }),
    //   finalize(() => {
    //     console.log("API successfull does not matter");
    //   })
    // );
  }
  dummyGetReq(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/findAll`).pipe(
      tap((_) => {
        console.log("API successfull");
      }),
      finalize(() => {
        console.log("API successfull does not matter");
      })
    );
  }
  deleteById(id: any): Observable<any> {
    return this.httpClient.delete("http://localhost:3200/").pipe(
      tap((_) => {
        console.log("API successfull");
      }),
      finalize(() => {
        console.log("API successfull does not matter");
      })
    );
  }


  douserRegistration(form: any): Observable<any> {
    const reqObj = {
      firstName: form.firstName,
      lastName: form.lastName,
      program: form.programme,
      password: form.password,
      email: form.email,
      phoneNo: form.phoneNo,
    };
    return this.httpClient.post(`${this.BASE_URL}/registration`, reqObj);
  }
  doUserLogin(form: any): Observable<any> {
    const reqObj = {
      email: form.email,
      password: form.password,
    };
    return this.httpClient.post(`${this.BASE_URL}/login`, reqObj);
  }
  doAdminLogin(form: any): Observable<any> {
    const reqObj = {
      email: form.email,
      password: form.password,
    };
    return this.httpClient.post(`${this.BASE_URL}/adminLogin`, reqObj);
  }
  makeComplaint(
    form: any, studentId: any
  ): Observable<any> {
    const reqObj = {
      category: form.category,
      complaint: form.complaint,
      complaintNature: form.complaintNature,
      subCategory: form.subCategory,
      studentId: studentId
    };
    return this.httpClient.post(`${this.BASE_URL}/makeComplaint`, reqObj);
  }
  acceptComplaint(
    complaintId:any
  ): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/process/${complaintId}/IP`);
  }
  resolvedComplaint(
    complaintId:any
   
  ): Observable<any> {
   
    return this.httpClient.get(`${this.BASE_URL}/process/${complaintId}/C`);
  }
}
