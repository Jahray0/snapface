import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';

//création des routes
const routes: Routes = [

    {path :'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule)},
    {path: '', component: LandingPageComponent}

];

//import et exportation des routes
@NgModule({
    imports: [
        RouterModule.forRoot(routes), 
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }