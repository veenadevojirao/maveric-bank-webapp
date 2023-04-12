import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dateOfBirth: String = "";

  login = new LoginModel();
  data: any;
  status: any;
  massage: any;
  constructor(
    private dataService: DataService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  submit() {
    // this.dataService.login(this.login).subscribe((res: any)=> {
    //     this.data = res;
    //     this.status= res.status;
    //     if (this.status == 1) {
    //       this.route.navigate(['/admin'])
    //     } else {
    //       this.massage = res.massage
    //     }
    //   }
    // )
  }
}
