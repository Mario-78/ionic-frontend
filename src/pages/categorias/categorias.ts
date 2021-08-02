import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriasService: CategoriaService) {
  }

  ionViewDidLoad() {
   // this.categoriasService.findAll().subscribe(this.f);
    this.categoriasService.findAll()
    .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error)
      }
    );  
  }

 /* f(response: any){
    console.log(response);
  }*/

}