import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event) {
   event.preventDefault()
   const target = event.target
   const username = target.querySelector('#username').value
   const password = target.querySelector('#password').value

   this.auth.getUserDetails(username, password).subscribe(data => {
    console.log(data, " is what we got from server.")
    if (data[0].name) {
      console.log("login success")
    } else {
      console.log("login fail")
    }
  })

   console.log(username, password) 
  }

}
