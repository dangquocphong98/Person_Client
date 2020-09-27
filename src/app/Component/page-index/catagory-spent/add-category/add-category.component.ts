import { Component, OnInit, ChangeDetectorRef, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { CategorySpentService } from 'src/app/Service/category-spent.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategorySpent } from '../Model/category-spent';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.sass']
})
export class AddCategoryComponent implements OnInit, OnChanges {

  @Input() modelBinding : CategorySpent;
  model : CategorySpent = new CategorySpent();
  textColor = 'primary';
  textButton = 'Thêm';
  isDisable = false;
  isCancel = false;

  constructor(private categoryService : CategorySpentService,
    private _snackBar: MatSnackBar,
    private cd: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
 
    if(changes.modelBinding.currentValue.hasOwnProperty('id'))
    {
      this.isCancel = true;
      this.textButton = 'Cập nhật';
      this.textColor = 'warn';
    }
     
    let newCourse = Object.assign({},this.modelBinding);
    this.model = newCourse;
    
    this.cd.detectChanges();  
  }
    
  ngOnInit(): void {
    this.validateInput();
  }

  Submit(){
      let type = '';
      if(this.textButton == "Thêm")
      {
          type = 'post';
      }
      else type = "put";
      this.categoryService.createCategorySpent(this.model,type).subscribe(
        (res : any) => {
          if(res)
          {
             if(res.status == 'true')
             {
              this._snackBar.open(res.message, 'Thông báo', {
                duration: 1500,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                
              });

              this.refreshModel();
             }
          }
        },
        error => {
          this._snackBar.open(error.message, 'Thông báo', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            
          });
        }
      )
  }

  refreshModel()
  {
    delete this.model['id'];
    this.model.codeCategory = '';
    this.model.name = '';
    this.isCancel = false;
    this.textButton = 'Thêm';
    this.textColor = 'primary';
  }

  validateInput()
  {
    if(this.model.codeCategory == '' || this.model.name == '') this.isDisable = true;
    else this.isDisable = false;
  }

}
