import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileService } from 'src/app/Service/profile.service';
import { Profile } from './Model/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService :ProfileService,
    private _snackBar: MatSnackBar) { }

  model : Profile = new Profile();

  ngOnInit(): void {
    this.loadModel();
  }

  loadModel()
  {
      this.profileService.loadProfile().subscribe((res : any)=> {
          if(!res) this.model.salary = 0;
          
          this.model = res;
          console.log(this.model);
      }, err => {

      })
  }

  Submit(){
    console.log(this.model);
      this.model.salary = Number(this.model.salary);
      this.profileService.UpadateOrCreate(this.model).subscribe(res => {
        console.log(res);
      })
  }
}
