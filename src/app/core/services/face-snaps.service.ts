import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { HttpClient } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";

//Objectif du service : partager les données

//Les services ne sont pas instanciés comme les composants : pas de methode ngOnInit

@Injectable({
  providedIn: 'root' //Explique a angular que le service doit etre enregistré à la racine de l'application
})

export class FaceSnapsService {
  
  constructor(private http: HttpClient) {} //Injection de dépendance : le service a besoin d'un autre service (ici httpClient)


      getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

      getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
      }

      //type litéral : snapType peut prendre 2 valeurs : snap ou unsnap
      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> { 
        return this.getFaceSnapById(faceSnapId).pipe(
          map(faceSnap=>({
            ...faceSnap,
            snaps:faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
          })),

          switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))

        );

        //const faceSnap = this.getFaceSnapById(faceSnapId);
        //snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }

      addFaceSnap(formValue:{title:string , description:string, imageUrl:string, location?:string}): Observable<FaceSnap> {
        return this.getAllFaceSnaps().pipe(
          map(facesnaps => [...facesnaps].sort((a:FaceSnap, b:FaceSnap) => a.id - b.id)),
          map( sortedFacesnaps=> sortedFacesnaps[sortedFacesnaps.length - 1]),
          map(previusFacesnap => ({
            ...formValue,
            snaps: 0,
            createdDate: new Date(),
            id: previusFacesnap.id + 1
          })),
          switchMap(newFacesnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFacesnap))
        );
      }




      //addFaceSnap(formValue: FaceSnap): void {
      //  const faceSnap: FaceSnap = {
      //    ...formValue,
      //    id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
      //    createdDate: new Date(),
      //    snaps: 0
      //  };
      //  this.faceSnaps.push(faceSnap);
      //}

}