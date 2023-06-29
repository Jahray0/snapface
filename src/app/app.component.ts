import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  mySnap!:FaceSnap;
  mySnap2!:FaceSnap;
  mySnap3!:FaceSnap;

  ngOnInit() {
    this.mySnap=new FaceSnap('Pichu', 'Petite souris jaune électrique', new Date(), 25, 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/172.png?v=ev2');
    this.mySnap2=new FaceSnap('Pikachu', 'Évolution de Pichu', new Date(), 25, 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/25.png?v=ev2');
    this.mySnap3=new FaceSnap('Raichu', 'Évolution de Raichu', new Date(), 25, 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/26.png?v=ev2');
  }

  title = '';

}
