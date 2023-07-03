import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

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

onSnap(faceSnapId: number) {
  if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
          tap(() => this.buttonText = 'Oups, unSnap!')
      );
  } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
          tap(() => this.buttonText = 'Oh Snap!')
      );
  }
}


}


