import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorySpentService {

  constructor(private http: HttpClient,) { }

  getListPaginator(param : any)
  {
      return this.http.post("https://localhost:44304/api/CategorySpent/GetListPaginator",param);
  }

  createCategorySpent(param : any, type : any)
  {
    if(type == "post")
       return this.http.post("https://localhost:44304/api/CategorySpent/CreateCategory",param);
    else
       return this.http.put("https://localhost:44304/api/CategorySpent/Update",param);
  }

  delete(param)
  {
    return this.http.delete("https://localhost:44304/api/CategorySpent/Delete/" + param);
  }
}
