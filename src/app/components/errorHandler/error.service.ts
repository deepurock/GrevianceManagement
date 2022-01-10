import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleHtrpErrors(error: HttpErrorResponse) {
    switch(error.status) {
      case 500 :
        // code block
        return error.error
      case 404:
        // code block
        return error.error
      default:
        return 'Server Side Error.'
        // code block
    }
    // return 'Server Side Error;'
  }
}
