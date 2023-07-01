import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  //vu que onContinue est comme un service on peut le mettre dans le constructeur comme argument (router)
  constructor(private router:Router) { }

  ngOnInit(): void {}

  onContinue() :void {
    this.router.navigateByUrl('facesnaps')
  }

}
