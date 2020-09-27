import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanspentService {

  constructor(private http: HttpClient) { }

  loadPlan()
  {
    return this.http.get("https://localhost:44304/api/PlanSpent/GetPlan");
  }

  setPlan(param : any)
  {
    return this.http.post("https://localhost:44304/api/PlanSpent/SetPlan",param);
  }
}
