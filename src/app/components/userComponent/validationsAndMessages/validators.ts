export class Patterns {
  firstname: RegExp;
  lastname: RegExp;
  phoneNo: RegExp;
  emailId: RegExp;
  password: RegExp;
  confirmpassword: RegExp;
  constructor() {
    this.firstname = /^[A-Za-z]+$/;
    this.lastname = /^[A-Za-z]+$/;
    this.phoneNo = /^[0-9]+$/;
    this.password = /^[ A-Za-z0-9_@./#&+-]*$/;
    this.confirmpassword = /^[ A-Za-z0-9_@./#&+-]*$/;
    this.emailId =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }
}
export class MaxLength {
  firstname: number;
  lastname: number;
  phoneNo: number;
  emailId: number;
  password: number;
  confirmpassord: number;
  constructor() {
    this.firstname = 30;
    this.lastname = 30;
    this.password = 15;
    this.confirmpassord = 15;
    this.phoneNo = 10;
    this.emailId = 50;
  }
}
export class MinLength {
  firstname: number;
  lastname: number;
  phoneNo: number;
  emailId: number;
  password: number;
  confirmpassord: number;
  constructor() {
    this.firstname = 3;
    this.lastname = 3;
    this.phoneNo = 10;
    this.emailId = 5;
    this.password = 5;
    this.confirmpassord = 5;
  }
}
