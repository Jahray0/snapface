import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './Interceptor';
import { HeaderComponent } from './components/header/header.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent
  ],
  providers:[
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    httpInterceptorProviders
  ]
})
export class CoreModule { }
