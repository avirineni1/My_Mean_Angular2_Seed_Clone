import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { HTTP_PROVIDERS} from 'angular2/http';
import {Router} from "angular2/router";
import {Authentication} from "../authenticate";
import 'rxjs/add/operator/catch';

@Component({
  selector:"second-component",
  templateUrl: `components/secondComponent/secondComponent.html`,
  providers: [Authentication, HTTP_PROVIDERS]
})
export class secondComponent {
  users: String[] = [];
  login: Object = {};
  errorMessage: String;

  constructor( public router: Router, public auth: Authentication) {

  }
  onSubmit(){
    this.auth.doLogin(this.login['username'].toString(), this.login['password'].toString())
        .subscribe(response => localStorage.setItem('jwt', response.token_id), error =>  this.errorMessage = <any>error);
        /*.catch(function(e){
          console.log(e);
        });*/
    if(localStorage.getItem('jwt')){
        this.router.navigate(['Home']);
    }
  }
}
