import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressDTO } from '../../models/address.dto';
import { CartItem } from '../../models/cart.item';
import { ClienteDTO } from '../../models/cliente.dto';
import { PedidoDTO } from '../../models/pedido.dto';
import { CartService } from '../../services/domain/cart.service';
import { ClienteService } from '../../services/domain/cliente.service';

@IonicPage()
@Component({
  selector: 'page-order-confirmation',
  templateUrl: 'order-confirmation.html',
})
export class OrderConfirmationPage {

  pedido: PedidoDTO;
  cartItens: CartItem[];
  cliente: ClienteDTO;
  endereco: AddressDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartService: CartService,
    public clienteService: ClienteService) {

      this.pedido = this.navParams.get('pedido');
  }

  ionViewDidLoad() {
    this.cartItens = this.cartService.getCart().itens;

    this.clienteService.findById(this.pedido.cliente.id)
      .subscribe(Response => {
        this.cliente = Response as ClienteDTO;
        this.endereco = this.findAddress(this.pedido.enderecoDeEntrega.id, Response['enderecos']);
      },
      error => {
        this.navCtrl.setRoot('HomePage');
      });
    
  }

  private findAddress(id: string, list: AddressDTO[]) : AddressDTO{
    let position = list.findIndex(x => x.id == id);
    return list[position];
  }

  total(){
    return this.cartService.total();
  }

}
