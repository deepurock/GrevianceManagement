export class ValidationRequiredMessage {
  /*Required  Messages*/
  firstNameReq: string;
  lastNameReq: string;
  emailReq: string;
  phoneNoReq: string;
  passwordReq: string;
  confirmpasswordReq: string;
  /*Required  Messages*/

  /*Pattern  Messages*/
  firstNamePattern: string;
  passwordPattern: string;
  confirmpasswordPattern: string;
  lastNameReqPattern: string;
  emailPattern: string;
  phoneNoReqPattern: string;
  /*Pattern  Messages*/

  /*Max Length  Messages*/
  firstNameMax: string;
  passwordMax: string;
  confirmpasswordMax: string;
  lastNameMax: string;
  emailMax: string;
  phoneNoMax: string;
  /*Max  Length  Messages*/

  /*Min Length  Messages*/
  firstNameMin: string;
  lastNameMin: string;
  passwordMin: string;
  confirmpasswordMin: string;
  emailMin: string;
  phoneNoMin: string;
  /*Min Length  Messages*/

  constructor() {
    this.firstNameReq = "First Name is  Required";
    this.lastNameReq = "Last Name is  Required";
    this.emailReq = "Email Id is  Required";
    this.phoneNoReq = "Phone  Number is  Required";
    this.passwordReq = "Password is Required";
    this.confirmpasswordReq = "ConfirmPassword is Required";

    this.firstNamePattern = "Only alphabets are allowed in first name";
    this.lastNameReqPattern = "Only alphabets are allowed in last name";
    this.emailPattern = "Invalid email Id";
    this.phoneNoReqPattern = "Mobile number is not valid";
    this.passwordPattern = "Invalid  Password";
    this.confirmpasswordPattern = "Invalid Confirm password";

    this.firstNameMax = "Max length for first name is 30";
    this.lastNameMax = "Max length for last name is 30";
    this.passwordMax = "Max length for password is 15";
    this.confirmpasswordMax = "Max length for confirm passord in 15";
    this.phoneNoMax = "Max length for Mobile number is 10";

    this.firstNameMin = "Minimum length for first name is 3";
    this.lastNameMin = "Minimum length for last name is 3";
    this.phoneNoMin = "Minimum length for Mobile  number is 10";
    this.passwordMin = "Max length for password is 5";
    this.confirmpasswordMin = "Max length for confirm passord in 5";
  }
}
