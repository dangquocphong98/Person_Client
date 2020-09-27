import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  loadProfile()
  {
    return this.http.get('https://localhost:44304/api/Profile/GetProfile');
  }

  UpadateOrCreate(param : any)
  {
    console.log(param);
    return this.http.post('https://localhost:44304/api/Profile/Update',param);
  }
}
