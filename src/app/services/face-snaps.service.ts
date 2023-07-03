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

    faceSnaps: FaceSnap[] = [{
        id: 1,
        title: 'Pichu',
        description: 'Petite souris jaune électrique',
        createdDate: new Date(),
        snaps: 25,
        imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/172.png?v=ev2',
        location: 'Jardin Trophée'
      },
      {
        id: 2,
        title: 'Pikachu',
        description: 'Évolution de Pichu',
        createdDate: new Date(),
        snaps: 32,
        imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/25.png?v=ev2',
        location: 'Forêt de Jade'
      },
      {
        id: 3,
        title: 'Raichu',
        description: 'Évolution de Pikachu',
        createdDate: new Date(),
        snaps: 50,
        imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/26.png?v=ev2',
        location: `Plage de l'Épreuve`
      },
    
      {
        id: 4,
        title: 'Salameche',
        description: 'Salamandre de feu',
        createdDate: new Date(),
        snaps: 25,
        imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/4.png?v=ev2',
        location: 'Bourg Palette'
      },
    
      {
        id: 5,
        title: 'Reptincel',
        description: 'Évolution Salameche',
        createdDate: new Date(),
        snaps: 32,
        imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/5.png?v=ev2',
        location: 'Batisques'
      },
    
      {
        id: 6,
        title: 'Dracaufeu',
        description: 'Évolution Reptincel',
        createdDate: new Date(),
        snaps: 50,
        imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/6.png?v=ev2',
        location: 'Antre 114'
      }];

      getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
            }else{
                return faceSnap;
            }
      }

      //type litéral : snapType peut prendre 2 valeurs : snap ou unsnap
      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void { 
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
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