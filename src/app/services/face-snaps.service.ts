import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

//Objectif du service : partager les données

//Les services ne sont pas instanciés comme les composants : pas de methode ngOnInit

@Injectable({
  providedIn: 'root' //Explique a angular que le service doit etre enregistré à la racine de l'application
})

export class FaceSnapsService {
  
  constructor(private http: HttpClient) {} //Injection de dépendance : le service a besoin d'un autre service (ici httpClient)

    faceSnaps: FaceSnap[] = [];

      getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

      getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
      }

      //type litéral : snapType peut prendre 2 valeurs : snap ou unsnap
      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void { 
        //const faceSnap = this.getFaceSnapById(faceSnapId);
        //snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }

      addFaceSnap(formValue: FaceSnap): void {
        const faceSnap: FaceSnap = {
          ...formValue,
          id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
          createdDate: new Date(),
          snaps: 0
        };
        this.faceSnaps.push(faceSnap);
      }

}