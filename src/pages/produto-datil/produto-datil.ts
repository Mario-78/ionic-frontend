import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { ProdutoDTO } from '../../models/produto.dto';
import { CartService } from '../../services/domain/cart.service';
import { ProdutoService } from '../../services/domain/produto.service';

@IonicPage()
@Component({
  selector: 'page-produto-datil',
  templateUrl: 'produto-datil.html',
})
export class ProdutoDatilPage {

  item: ProdutoDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoService: ProdutoService,
    public cartService: CartService) {
  }

  ionViewDidLoad() {
    let produto_id = this.navParams.get('produto_id')
    this.produtoService.findById(produto_id)
      .subscribe(Response => {
        this.item = Response;
        this.getImageUrlIfExists();
      },
      error => {});
  }

  getImageUrlIfExists(){
    this.produtoService.getSmallImageFromBucket(this.item.id)
      .subscribe(Response => {
        this.item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${this.item.id}.jpg`;
      },
      error => {});
  }

  addToCart(produto: ProdutoDTO){
    this.cartService.addProduto(produto);
    this.navCtrl.setRoot('CartPage');
  }

}
