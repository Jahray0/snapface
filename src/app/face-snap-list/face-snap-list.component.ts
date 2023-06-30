import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor() { }

  ngOnInit(): void {
    
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
    },
  
    {
      title: 'Salameche',
      description: 'Salamandre de feu',
      creatDate: new Date(),
      snaps: 25,
      imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/4.png?v=ev2',
      location: 'Kanto'
    },
  
    {
      title: 'Reptincel',
      description: 'Évolution Salameche',
      creatDate: new Date(),
      snaps: 32,
      imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/5.png?v=ev2',
      location: 'Kanto'
    },
  
    {
      title: 'Dracaufeu',
      description: 'Évolution Reptincel',
      creatDate: new Date(),
      snaps: 50,
      imageUrl: 'https://www.pokebip.com/pokedex-images/ecarlate-violet/300/6.png?v=ev2',
      location: 'Kanto'
    }];
  }

}


