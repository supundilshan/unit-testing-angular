import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get("api/users")
  }

  getUserById(id: number) {
    return this.http.get("api/users/" + id)
  }  
  
  updateUser(id: number, updateBody: any) {
    return this.http.put("api/users/" + id, updateBody)
  }
}
