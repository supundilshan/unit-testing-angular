import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    console.log("A HTTP call");
    
  }

  sharedFunction() {
    console.log("i am shared service");

  }
}
