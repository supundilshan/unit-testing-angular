import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private SharedService: SharedService) { }

  multiply(a: number, b: number) {
    this.SharedService.sharedFunction()
    return a * b
  }
}
