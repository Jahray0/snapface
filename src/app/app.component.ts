import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  /*
  mySnap!: FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;
  */

  ngOnInit() {

    this.faceSnaps = [{
      title: 'Pichu',
      description: 'Petite souris jaune électrique',
      creatDate: new Date(),
      snaps: 25,
      imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/172.png?v=ev2',
      location: 'Johto'
    },
    {
      title: 'Pikachu',
      description: 'Évolution de Pichu',
      creatDate: new Date(),
      snaps: 32,
      imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/25.png?v=ev2',
      location: 'Kanto'
    },
    {
      title: 'Raichu',
      description: 'Évolution de Pikachu',
      creatDate: new Date(),
      snaps: 50,
      imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/26.png?v=ev2'
    }];

    /*this.mySnap = {
      title: 'Pichu',
      description: 'Petite souris jaune électrique',
      creatDate: new Date(),
      snaps: 25,
      imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/172.png?v=ev2',
      location: 'Johto'
    };

    this.mySnap2 = {
      title: 'Pikachu',
      description: 'Évolution de Pichu',
      creatDate: new Date(),
      snaps: 32,
      imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/25.png?v=ev2',
      location: 'Kanto'
    };

    this.mySnap3 = {
      title: 'Raichu',
      description: 'Évolution de Pikachu',
      creatDate: new Date(),
      snaps: 50,
      imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/26.png?v=ev2'

    };*/


    /*this.mySnap2=new FaceSnap('Pikachu', 'Évolution de Pichu', new Date(), 25, 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/25.png?v=ev2');
    this.mySnap3=new FaceSnap('Raichu', 'Évolution de Raichu', new Date(), 25, 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/26.png?v=ev2');*/
  }

  title = '';

}
