import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

//création des routes
const routes: Routes = [

    {path: 'facesnaps/:id', component: SingleFaceSnapComponent},
    // /:id coresspond au parametre permettant de récupérer l'id de l'objet
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