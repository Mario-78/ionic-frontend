import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email : "",
    senha : ""
  };

  constructor(public navCtrl: NavController, 
              public menuCtrl: MenuController,
              public auth: AuthService) {

    this.menuCtrl.swipeEnable(false);

  }

  login(){
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        console.log(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
    //console.log(this.creds);
      error => {});
    
  }

}
