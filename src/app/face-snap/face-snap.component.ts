import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  title!:string;
  description!:string;
  creatDate!:Date;
  snaps!:number;
  imageUrl!:string;

  ngOnInit() {
    this.title='Pikachu'
    this.description='Petite souris jaune électrique'
    this.creatDate=new Date();
    this.snaps=25;
    this.imageUrl='https://www.pokebip.com/pokedex-images/ecarlate-violet/300/25.png?v=ev2'
  }


}


