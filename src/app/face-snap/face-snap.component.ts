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

  title2!: string;
  description2!: string;
  creatDate2!: Date;
  snaps2!:number;
  imageUrl2!:string;

  title3!: string;
  description3!: string;
  creatDate3!: Date;
  snaps3!:number;
  imageUrl3!:string;

  ngOnInit() {
    this.title='Pichu'
    this.description='Petite souris jaune électrique'
    this.creatDate=new Date();
    this.snaps=25;
    this.imageUrl='https://www.pokebip.com/pokedex-images/ecarlate-violet/300/172.png?v=ev2'

    /*this.title2='Pikachu'
    this.description2='Évolution de Pichu'
    this.creatDate2=new Date();
    this.snaps2=32;
    this.imageUrl2='https://www.pokebip.com/pokedex-images/ecarlate-violet/300/25.png?v=ev2'

    this.title3='Raichu'
    this.description3='Évolution de Pikachu'
    this.creatDate3=new Date();
    this.snaps3=50;
    this.imageUrl3='https://www.pokebip.com/pokedex-images/ecarlate-violet/300/26.png?v=ev2'*/
  }

  onAddSnap(){
    this.snaps ++;
  }

  onRazSnaps(){
    this.snaps=25;
  }


}


