import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  constructor(private httpClient: HttpClient) {}
  BASE_URL: string = "http://192.168.0.106:8080";
  getCompletedComplaint(): Observable<any> {
    return this.httpClient.get("http://localhost:3200/").pipe(
      tap((_) => {
        console.log("API successfull");
      }),
      finalize(() => {
        console.log("API successfull does not matter");
      })
    );
  }
  getPendingComplaint(): Observable<any> {
    return this.httpClient.get("http://localhost:3200/").pipe(
      tap((_) => {
        console.log("API successfull");
      }),
      finalize(() => {
        console.log("API successfull does not matter");
      })
    );
  }
  getInprogressComplaint(): Observable<any> {
    return this.httpClient.get("http://localhost:3200/").pipe(
      tap((_) => {
        console.log("API successfull");
      }),
      finalize(() => {
        console.log("API successfull does not matter");
      })
    );
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
  // addProductDetails(
  //   productName: any,
  //   cost: any,
  //   firstName: any,
  //   lastName: any,
  //   age: any
  // ): Observable<any> {
  //   return this.httpClient.get(
  //     "http://localhost:3200" +
  //       "/products?" +
  //       "productName=" +
  //       productName +
  //       "&cost=" +
  //       cost +
  //       "&firstName=" +
  //       firstName +
  //       "&lastName=" +
  //       lastName +
  //       "&age=" +
  //       age
  //   );
  // }

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
  doUserLogin(
    productName: any,
    cost: any,
    firstName: any,
    lastName: any,
    age: any
  ): Observable<any> {
    const reqObj = {
      productName: productName,
      cost: cost,
      firstName: firstName,
      lastName: lastName,
      age: +age,
    };
    return this.httpClient.post("http://localhost:3200" + "/products", reqObj);
  }
  doAdminLogin(
    productName: any,
    cost: any,
    firstName: any,
    lastName: any,
    age: any
  ): Observable<any> {
    const reqObj = {
      productName: productName,
      cost: cost,
      firstName: firstName,
      lastName: lastName,
      age: +age,
    };
    return this.httpClient.post("http://localhost:3200" + "/products", reqObj);
  }
  makeComplaint(
    productName: any,
    cost: any,
    firstName: any,
    lastName: any,
    age: any
  ): Observable<any> {
    const reqObj = {
      productName: productName,
      cost: cost,
      firstName: firstName,
      lastName: lastName,
      age: +age,
    };
    return this.httpClient.post("http://localhost:3200" + "/products", reqObj);
  }
  acceptComplaint(
    productName: any,
    cost: any,
    firstName: any,
    lastName: any,
    age: any
  ): Observable<any> {
    const reqObj = {
      productName: productName,
      cost: cost,
      firstName: firstName,
      lastName: lastName,
      age: +age,
    };
    return this.httpClient.post("http://localhost:3200" + "/products", reqObj);
  }
  rejectComplaint(
    productName: any,
    cost: any,
    firstName: any,
    lastName: any,
    age: any
  ): Observable<any> {
    const reqObj = {
      productName: productName,
      cost: cost,
      firstName: firstName,
      lastName: lastName,
      age: +age,
    };
    return this.httpClient.post("http://localhost:3200" + "/products", reqObj);
  }
}
