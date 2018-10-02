import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  config = '../../../assets/users.json';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.config);
  }
}
