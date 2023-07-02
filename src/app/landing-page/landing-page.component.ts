import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements  OnInit{

  userEmail!: string;
  //On peut mettre une valeur par defaut avec : userEmail:string = 'test@google.com';

  //vu que onContinue est comme un service on peut le mettre dans le constructeur comme argument (router)
  constructor(private router:Router) { }

  ngOnInit(): void {}

  onContinue() :void {
    this.router.navigateByUrl('facesnaps')
  }

  onSubmitForm(form:NgForm) {
    console.log(form.value);
  }
}
