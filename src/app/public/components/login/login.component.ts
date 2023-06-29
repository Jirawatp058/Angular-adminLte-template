import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private authService : AuthService){}

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', Validators.required),
    });
  }

  login(){
    this.loginForm.markAllAsTouched();

    if(!this.loginForm.invalid){
      this.authService.login(this.loginForm.value).then((res: any) => {
        console.log('res', res);
        if (res.success) {
          
        }
      }).catch((err) => {
        console.log('err', err);
      }
      );
    }
   
    console.log('login', this.loginForm);
    
  }
}
