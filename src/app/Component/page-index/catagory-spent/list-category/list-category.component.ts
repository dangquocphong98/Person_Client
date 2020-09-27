import { Component, OnInit,  ChangeDetectorRef,  Output, EventEmitter } from '@angular/core';
import { CategorySpentService } from 'src/app/Service/category-spent.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogdeleteComponent } from './dialogdelete/dialogdelete.component';


@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.sass']
})
export class ListCategoryComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name','action'];
  dataSource : any;
  totalRecord : number;
  IsNoData;

  constructor(private cataService : CategorySpentService,
    private _snackBar: MatSnackBar,
    private cd: ChangeDetectorRef,
    public dialog: MatDialog) { }

    @Output() UpdateClick = new EventEmitter();

  pageSizeOption = [3,5,10];
  pageSize = this.pageSizeOption[0];
  pageIndex;

  ngOnInit(): void {
    this.getDataTable(1, this.pageSize);
  }

  getDataTable(pageIndex,pageSize)
  {
       let param ={
         pageIndex : pageIndex,
         pageSize : pageSize
       };

       this.cataService.getListPaginator(param).subscribe((res : any) => {
          if(res != null)
          {
              this.dataSource =  res.listPage;
              this.totalRecord = res.totalRecord;
          }

          if(this.dataSource.length <= 0 || res == null) this.IsNoData = true;
          else this.IsNoData = false;

          this.cd.detectChanges();
       },error => {
        this._snackBar.open('Có lỗi xảy ra', 'Thông báo', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          
        });

        this.IsNoData = true;
       }
       );

       
  }

  pageChange(e)
  {
    this.getDataTable(e.pageIndex + 1,e.pageSize);
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex + 1;
  }

  Update(element){
    this.UpdateClick.emit(element);
  }

  ConfirmDelete(param)
  {
      const dialogRef = this.dialog.open(DialogdeleteComponent, {
        width: '250px',
        data : param
      });

      dialogRef.afterClosed().subscribe(result => {
        this.getDataTable(this.pageIndex,this.pageSize);
      });
  }
}
