import { Component, OnInit } from '@angular/core';
import { CategorySpent } from './Model/category-spent';

@Component({
  selector: 'app-catagory-spent',
  templateUrl: './catagory-spent.component.html',
  styleUrls: ['./catagory-spent.component.sass']
})
export class CatagorySpentComponent implements OnInit {

  constructor() { }


  modelBind : CategorySpent = {
    codeCategory : '',
    name : ''
  }

  BindModel(e){
     this.modelBind = e;
  }

  ngOnInit(): void {
  }

}
