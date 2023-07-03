import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap$!:Observable<FaceSnap>;
  buttonText!:string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}


ngOnInit() {
  this.buttonText='Oh Snap!';
  const faceSnapId = +this.route.snapshot.params['id'];
  //snapshot permet de récupérer l'id de l'objet -> les param sont de type string et nous il nous faut un number donc typecast grace au +
  this.faceSnap$=this.faceSnapsService.getFaceSnapById(faceSnapId);
  //initialisation de l'objet faceSnap avec l'objet récupéré par la méthode getFaceSnapById

} 

onSnap(){
  //if(this.buttonText==='Oh Snap!'){
  //  this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
  //  this.buttonText='Oups, unSnap!'
  //
  //}
  //else{
  //  this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
  //  this.buttonText='Oh Snap!'
  //}
  //
}


}


