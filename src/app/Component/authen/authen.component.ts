import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.sass']
})
export class AuthenComponent implements OnInit {

  constructor(private router: Router) { }
  username : string;
  pass : string;

  ngOnInit(): void {
  }

  submit(){
      if(this.username == 'admin' && this.pass == 'phong')
      {
        localStorage.setItem('token','ssss');
        this.router.navigateByUrl('/category');
      }
  }

}
