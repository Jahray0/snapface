import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

//création des routes
const routes: Routes = [

    {path: 'facesnaps', component: FaceSnapListComponent},
    {path: '', component: LandingPageComponent}


];

//import et exportation des routes
@NgModule({
    imports: [RouterModule.forRoot(routes), 
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }