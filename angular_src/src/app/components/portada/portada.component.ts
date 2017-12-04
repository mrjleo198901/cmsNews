import { Component, OnInit } from '@angular/core';
import {GetNewsAllService} from '../../service/src/app/get-news-all.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  text: string;
  images: any[];
  todayDate: any;
  dt: Date = new Date();
  categorias: any;
  constructor(public restProvider: GetNewsAllService) { }

  ngOnInit() {
    this.getCategoriess();
    this.images = [];
    this.images.push({source: 'assets/images/galleria1.jpg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: 'assets/images/galleria2.jpg', alt: 'Description for Image 2', title: 'Title 2'});
    this.images.push({source: 'assets/images/galleria3.jpg', alt: 'Description for Image 3', title: 'Title 3'});
    this.images.push({source: 'assets/images/galleria4.jpg', alt: 'Description for Image 4', title: 'Title 4'});
    this.images.push({source: 'assets/images/galleria5.jpg', alt: 'Description for Image 5', title: 'Title 5'});
    this.images.push({source: 'assets/images/galleria6.jpg', alt: 'Description for Image 6', title: 'Title 6'});
    this.images.push({source: 'assets/images/galleria7.jpg', alt: 'Description for Image 7', title: 'Title 7'});
    this.images.push({source: 'assets/images/galleria8.jpg', alt: 'Description for Image 8', title: 'Title 8'});
    this.images.push({source: 'assets/images/galleria9.jpg', alt: 'Description for Image 9', title: 'Title 9'});
    this.images.push({source: 'assets/images/galleria10.jpg', alt: 'Description for Image 10', title: 'Title 10'});
    this.images.push({source: 'assets/images/galleria11.jpg', alt: 'Description for Image 11', title: 'Title 11'});
    this.images.push({source: 'assets/images/galleria12.jpg', alt: 'Description for Image 12', title: 'Title 12'});

    const initial = new Date(this.getDate()).toLocaleDateString().split('/');
    console.log(this.getDate());
    console.log(initial);
    this.todayDate = [initial[0], initial[1], initial[2]].join('/');
    console.log(this.todayDate);
  }

  onclick() {
    console.log(this.text);
  }

  public getDate(): number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

  getCategoriess() {
    this.categorias = [] ;
    this.restProvider.getCategorias().then(data => {
      this.categorias = data;
      console.log(this.categorias);
      /*/!*let n = this.categorias.length;
      for (let i = 0; i < n; i++){
        this.categorias2.push(this.categorias[i].imagen);
      }*!/*/
    });
  }
}
