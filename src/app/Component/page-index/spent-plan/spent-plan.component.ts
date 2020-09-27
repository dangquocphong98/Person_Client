import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlanspentService } from 'src/app/Service/planspent.service';

@Component({
  selector: 'app-spent-plan',
  templateUrl: './spent-plan.component.html',
  styleUrls: ['./spent-plan.component.sass']
})
export class SpentPlanComponent implements OnInit {

  constructor(private PlanService:PlanspentService,private _snackBar: MatSnackBar) { }

  salary : any;
  listCategory : any;

  unit :string = "%";
  //maximum : number;

  ngOnInit(): void {
    this.loadPlan();
  }

  loadPlan()
  {
      this.PlanService.loadPlan().subscribe((res : any) => {
        console.log(res);
        if(res)
        {
          this.salary = res.salary;
          this.listCategory = res.listCategorySpent;

          //this.maximum = this.salary;
          //console.log(this.maximum);

          this.selectChangeHandler();
        }
      });
  }

  blurInput(event,item)
  {
      const value = event.target.value;
      //this.salary -= value;

      if(this.unit == 'Currency')
      {
          item.amountPerTotal = (value/this.salary) * 100;
      }
      else if(this.unit == '%')
      {
        item.amountPerTotal = this.salary * (value/100);
      }
  }

  submit()
  {
     this.PlanService.setPlan(this.listCategory).subscribe((res : any) => {
        console.log(res);
     })
  }

  selectChangeHandler(){
    this.listCategory.forEach(element => {
      element.unit = this.unit;
    });
  }
}
