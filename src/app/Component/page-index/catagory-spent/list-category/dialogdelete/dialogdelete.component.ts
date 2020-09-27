import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategorySpentService } from 'src/app/Service/category-spent.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dialogdelete',
  templateUrl: './dialogdelete.component.html',
  styleUrls: ['./dialogdelete.component.sass']
})
export class DialogdeleteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogdeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService : CategorySpentService,
    private _snackBar: MatSnackBar,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  submitDelete()
  {
      this.categoryService.delete(this.data.id).subscribe(
        (res : any) => {
            if(res && res.status == 'true')
            {
              this._snackBar.open(res.message, 'Thông báo', {
                duration: 1500,
                horizontalPosition: 'center',
                verticalPosition: 'top',
              });

              this.onNoClick();
            }
        },
        error => {
          this._snackBar.open(error.message, 'Thông báo', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            
          });
        })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
