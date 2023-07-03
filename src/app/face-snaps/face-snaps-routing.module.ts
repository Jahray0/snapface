import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";

const routes : Routes = [
    
    {path: 'create', component: NewFaceSnapComponent},
    {path: ':id', component: SingleFaceSnapComponent},
    // /:id coresspond au parametre permettant de récupérer l'id de l'objet
    {path: '', component: FaceSnapListComponent},
]

@NgModule({
    imports : [
        RouterModule.forChild(routes),
    ],
    exports : [
        RouterModule,
    ],

})

export class FaceSnapsRoutingModule {}